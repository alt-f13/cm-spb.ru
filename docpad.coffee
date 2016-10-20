# The DocPad Configuration File
# It is simply a CoffeeScript Object which is parsed by CSON
docpadConfig = {

	# =================================
	# Template Data
	# These are variables that will be accessible via our templates
	# To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ

	templateData:

		# Specify some site properties
		site:
			# The production url of our website
			url: "http://cm-spb.ru"
			outPath: './output'


			# Here are some old site urls that you would like to redirect from
			oldUrls: [
				'www.cm-spb.ru',
				'www.plm-spb.ru'
			]

			# The default title of our website
			title: "Колледж метрополитена"

			# The website description (for SEO)
			description: """
			             Cанкт-петербургское государственное бюджетное профессиональное образовательное учреждение колледж метрополитена
			             				"""

			# The website keywords (for SEO) separated by commas
			keywords: """
			          колледж, образование, санкт-петербург, спб, метрополитен, работа, обучение, профессия, будущее
			          """

			# The website author's name
			author: "Galyamin.d.d"

			# The website author's email
			email: "Galyamin.d.d@gmail.com"

			# Styles
			styles: [
				#"/styles/twitter-bootstrap.css"
				"//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
				"//blueimp.github.io/Gallery/css/blueimp-gallery.min.css"
				#"/css/bootstrap-image-gallery.css"
				#"/css/demo.css"
				#"/css/kube.css"
				#"/css/tree.css"
				#	"/css/landing-page.css"
				#	"/css/icons.css"
				"http://fonts.googleapis.com/css?family=Buenard:700"
					#"/css/diamonds.css"
					"/css/blueimp-gallery.css"
					"/css/blueimp-gallery-indicator.css"
					"/css/blueimp-gallery-video.css"
				"/css/index.css"

			]

			# Scripts
			scripts: [
				#"//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"
				#"//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"
				#"/vendor/twitter-bootstrap/dist/js/bootstrap.min.js"
				"//netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
				"//blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"
				#"/js/bootstrap-image-gallery.js"
				"/js/tree.js"
				"/js/uhpv-full.min.js"
				"http://pupunzi.com/mb.components/mb.YTPlayer/demo/inc/jquery.mb.YTPlayer.js"
				"/js/jquery.diamonds.js"
				"/js/date.js"
				"https://rawgit.com/kimmobrunfeldt/progressbar.js/1.0.0/dist/progressbar.js"
				#"/js/jquery.knob.min.js"
				"/js/jquery.vide.js"
			]



		# -----------------------------
		# Helper Functions

		# Get the prepared site/document title
		# Often we would like to specify particular formatting to our page's title
		# we can apply that formatting here
		getPreparedTitle: ->
			# if we have a document title, then we should use that and suffix the site's title onto it
			if @document.title
				"#{@document.title} | #{@site.title}"
			# if our document does not have it's own title, then we should just use the site's title
			else
				@site.title

		# Get the prepared site/document description
		getPreparedDescription: ->
			# if we have a document description, then we should use that, otherwise use the site's description
			@document.description or @site.description

		# Get the prepared site/document keywords
		getPreparedKeywords: ->
			# Merge the document keywords with the site keywords
			@site.keywords.concat(@document.keywords or []).join(', ')


	# =================================
	# Collections
	# These are special collections that our website makes available to us

	collections:
		menu: (database) ->
			database.findAllLive({menutitle: $exists: true}, [pageOrder:1,menutitle:1])
		menu2: (database) ->
			database.findAllLive({menu2title: $exists: true}, [pageOrder:1,menu2title:1])
		posts: (database) ->
			database.findAllLive({layout:$has:'post'}, [date:-1])
		faces: (database) ->
			database.findAllLive({layout:$has:'faces'}, [lastname:1])
		contacts: (database) ->
			database.findAllLive({layout:$has:'contacts'}, [order:1])
		gallery: (database) ->
			database.findAllLive({layout:$has:'gallery'})


	# =================================
	# Plugins

#		getIndex: ->
#			@getCollection('html').findOne(url: '/')?.toJSON()
	getArticles: ->
		@getCollection('html').findAllLive(type:'post',[ date:-1])
	getLinks: ->
		@getCollection('html').findAllLive(type: 'link',[name:1])

	plugins:
		minicms:

			#prefix:
			#    url:    'cms'     # Access the admin panel through '/cms' by default
			#    meta:   'cms'     # Store form data of each content into a 'cms' field by default (inside metadata)

			# Secret, required by signed cookie session
			secret: 'keyboard cat posts'

			# Implement the logic you want for authentication
			auth: (login, password, callback) ->
				if login is 'admin' and password is 'sdc888'
					callback null, true
				else
					callback "Invalid login or password.", false

			# List all the content that is managed by the plugin
			models: [
				# Example of a content that is unique and only has 1 entry
				name: ['Configuration', 'Configuration'] # First is singular name, second is plural. Here we use the same because we never have multiple "Configurations"
				unique: true # Make this model "unique", that means there can only be 1 entry, not more, not less
				form:
					url: "/index" # Save configuration meta in index file
					ext: 'html.md' # With a ".html.md" extension

					# Set the metadata template of the file
					# Each function that we put in the metadata will be called and the result will be used
					# The context (this, @) contains the @docpad instance, a @slugify function and all the properties of the current model
					meta:
						title: -> @title
						layout: 'home'
						about: -> @about

					# The content follows the metadata. For this file, it is in markdown (because we are making a html.md file)
					content: -> @title

					# For each model, we can create a form with several components that will allow the user to input data
					components: [
						# A 'title' field with a text input component (notice that we use this title field in the metadata template, above)
						field: 'title'
						label: 'Website Title' # The label is what will appear as field name in the form for the admin panel
						type: 'text'
					,
						# Another text input component to type the Author of the website (this one is still stored in the cms: key of the meta, but we don't really use it for now. Maybe later?)
						field: 'author'
						label: 'Website Author'
						type: 'text'
					,
						# An 'about' field using a plain textarea component
						field: 'about'
						label: 'About me'
						type: 'textarea'
						height: 100
					,
						# A color picker example
						field: 'myColor'
						label: 'My Favourite Color'
						type: 'color'
					,
						# We can choose a 'category' with a choice component.
						field: 'category'
						label: 'Category'
						type: 'choice'
						expanded: true # The component will be "expanded" using html radio inputs

						# The data: option returns an array of available categories.
						# For this example, it is hardcoded but you can make your own logic using @docpad collections
						data: -> ['Sport', 'News']
					,
						# We add a 'sub-category' field that depends on the 'category' field
						field: 'subCategory'
						deps: ['category'] # This field will update when the category field changes value
						label: 'Sub-category'
						type: 'choice'

						# Here, we use the @category value to decide which sub-categories are available
						# It will be called each time the field reloads
						data: ->
							if @category is 'Sport'
								return ['Footbal', 'Tennis', 'Handball', 'Swimming']
							else if @category is 'News'
								return ['Technology', 'Finance', 'Gossip']
							else # No category selected, then no sub-category available
								return []
					,
						# Allow the user to change the posts logo by uploading an image
						field: 'logo'
						label: 'Website Logo'
						type: 'file'
						use: 'standard' # There can be multiple image profiles, here we define the one that will be displayed inside the form
						optional: true # We can make a field optional
						images: # Image profiles
							# For this field, we only make 1 profile called 'standard' that will resize the image to fit in a 220x220 rectangle.
							standard:
								# You can hardcode an extension (png, jpg, gif), or use the @ext value to dynamically generate the right type.
								# Also works with animated gifs (but a bit experimental)
								url: -> "/logo.#{@ext}" # The url to create for the image
								width: 220 # The maximum width of the image
								height: 220 # The maximum height of the image
					,
						# An example of rich text field 'wysiwyg' component
						# The resulting value will be valid html
						field: 'wysiwygExample'
						label: 'Wysiwyg example'
						type: 'wysiwyg'
						height: 450 # Optional, set the height of the field inside the form
					,
						# An example of 'markdown' component, so you can choose your philosophy: wysiwyg or markdown
						field: 'markdownExample'
						label: 'Markdown example'
						type: 'markdown'
						height: 450 # Optional, set the height of the field inside the form
					]
			,
			# Example of a model that can have several entries.
				# We are making a posts, so we need articles!
				name: ['Article', 'Articles'] # First is singular form, second is plural form. Note that urls inside admin panel will be generated by slugifying those names.
				list:
					# Because this model can have several entries, we need a list page.
					# Here is the configuration of it
					# A list is showing several 'fields' of each entries inside a table layout
					fields: [
						name: 'Title' # Name of the 'field' in the table
						value: -> @title # The function will be called and the value will be used for display. Inside the function, you have access to all the entry's meta
					,
						name: 'Image'
						# If you want to display html that won't be escaped, use 'html' instead of 'value'
						html: ->
							if @image?
								return '<div style="height:32px"><img src="'+@image.square.url+'" style="width:32px;height:32px" alt="image" /></div>'
							else
								return '<div style="height:32px">&nbsp; - &nbsp;</div>'
					,
						name: 'Tags'
						html: ->
							if @tags instanceof Array
								return @tags.join(', ')
							else
								return ''
					]
					# You can add filters to you list to make browsing easier
					filters: [
						name: 'Tag' # Filter by tag
						# The data function returns all the available values to use on the filter
						# Here, we are walking through the articles to find all tags
						data: ->
							tags = []
							filter = layout: 'post'
							for item in @docpad.getCollection('html').findAll(filter).models
								itemTags = item.get('tags')
								if itemTags instanceof Array
									for tag in itemTags
										if not (tag in tags)
											tags.push tag
							return tags
					,
						# A custom filter to choose articles with image or articles without image only
						name: 'Kind'
						data: -> ['With Image', 'Textual']
					]
					# The list's data function is returning all the entries of the list.
					# It is in charge to take in account the filters values
					# When a filter changes, this function is called again to update the list
					# The result of this function can be a Docpad Collection or a JSON-like array
					data: ->
						filter = layout: 'post'

						# Filter by kind (with image or not)
						if @kind is 'with-image'
							filter.image = $ne: null
						else if @kind is 'textual'
							filter.image = null

						collection = @docpad.getCollection('html').findAll(filter)

						if @tag?
							# Filter by tags
							finalModels = []
							if collection.models instanceof Array
								for model in collection.models
									tags = model.get('tags')
									for tag in tags
										if @slugify(tag) is @tag
											finalModels.push model.toJSON()
											break
							return finalModels
						else
							return collection

				form:
					# As with the configuration model, we need a form to add/edit articles
					url: -> "/posts/#{@slugify @title}" # Each article's url. We slugify the title to generate the url
					ext: 'html.md'
					meta:
						title: -> @title
						type: 'post'
						layout: 'post'
						image: -> @image
						tags: -> if @tags instanceof Array then @tags else []
						date: -> new Date(@date)
					content: -> @content
					components: [
						field: 'title'
						type: 'text'
					,
						# A 'date' field with a datetime picker
						field: 'date'
						type: 'date'
						# You can remove the hours by adding time: false
						#time:       false
					,
						# Choose the tags of your article
						field: 'tags'
						type: 'tags'
						data: ->
							# The data is used for autocompletion
							tags = []
							for item in @docpad.getCollection('html').findAll().models
								itemTags = item.get('tags')
								if itemTags instanceof Array
									for tag in itemTags
										if not (tag in tags)
											tags.push tag
							return tags
					,
						field: 'content'
						type: 'wysiwyg'
						# You can add your custom validator on any field
						# Well, this is actually useless here because the default validator is doing the same check,
						# but feel free to check more things for your own needs.
						validate: (val) -> typeof(val) is 'string' and val.length > 0
						# You can also add your custom sanitizer that will be called before saving the content
						sanitize: (val) -> return val?.trim()
					,
						field: 'image'
						type: 'file'
						use: 'thumbnail'
						optional: true
						images:
							# This time we have 3 image profiles
							# Each of them will be generated from the original picture
							# Notice they all have a different url
							standard:
								url: -> "/posts/#{@slugify @title}.#{@ext}"
								width: 498
								height: 9999999
							thumbnail:
								url: -> "/posts/#{@slugify @title}.tn.#{@ext}"
								width: 9999999
								height: 128
							square:
								url: -> "/posts/#{@slugify @title}.sq.#{@ext}"
								width: 32
								height: 32
								crop: true # With this option, the image will be cropped in order to have the exact 32x32 size
					]
			,
				# Another model to add links on the sidebar of the posts
				# Nothing more than the articles model
				name: ['Link', 'Links']
				list:
					fields: [
						name: 'Name'
						value: -> @title
					,
						name: 'URL'
						html: -> @href
					]
					data: ->
						filter = type: 'link'
						return @docpad.getCollection('html').findAll(filter)

				form:
					url: -> "/link/#{@slugify @name}"
					ext: 'html.md'
					meta:
						title: -> @name
						type: 'link'
						layout: 'link'
						href: -> @url
					content: -> @url
					components: [
						field: 'name'
						type: 'text'
					,
						field: 'url'
						label: 'URL'
						type: 'text'
					]
			]
    ,
		# lunr:
		# 	indexes:
		# 		myIndex:
    #       collection: 'posts'
    # ,
    sitemap:
      cachetime: 600000
      changefreq: 'weekly'
    	priority: 0.5
    	filePath: 'sitemap.xml'



		#redirector:
			#redirects:
				# source: destination
				#"cms/": "http://cm-spb.ru/"
		#           #"project/info.html": "http://new-site.com/new-info-page"

		#
			# 	ghpages:
			#   	deployBranch: 'master'
			#   	deployRemote: 'pages'
		#
		# 	downloader:
		# 		downloads: [
		# 			{
		# 				name: 'Bootstrap'
		# 				path: 'src/files/vendor/twitter-bootstrap'
		# 				url: 'https://codeload.github.com/twbs/bootstrap/tar.gz/master'
		# 				tarExtractClean: true
		# 			}
		# 		]
		#




	#thumbnails:
		#imageMagick: true




	# =================================
	# DocPad Events

	# Here we can define handlers for events that DocPad fires
	# You can find a full listing of events on the DocPad Wiki
	events:

		# Server Extend
		# Used to add our own custom routes to the server before the docpad routes are added
		serverExtend: (opts) ->
			# Extract the server from the options
			{server} = opts
			docpad = @docpad

			# As we are now running in an event,
			# ensure we are using the latest copy of the docpad configuraiton
			# and fetch our urls from it
			latestConfig = docpad.getConfig()
			oldUrls = latestConfig.templateData.site.oldUrls or []
			newUrl = latestConfig.templateData.site.url

			# Redirect any requests accessing one of our sites oldUrls to the new site url
			server.use (req,res,next) ->
				if req.headers.host in oldUrls
					res.redirect(newUrl+req.url, 301)
				else
					next()
}


# Export our DocPad Configuration
module.exports = docpadConfig
