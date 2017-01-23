# The DocPad Configuration File
# It is simply a CoffeeScript Object which is parsed by CSON
docpadConfig = {
	# =================================
	# Paths Configuration

	# Root Path
	# The root path of our our project
	rootPath: process.cwd()  # default

	# Package Path
	# The project's package.json path
	# If it is a relative path, it will have the resolved `rootPath` prepended to it
	packagePath: 'package.json'  # default

	# Config Paths
	# An array of paths that we try to extract our docpad configuration from
	# configPaths: [  # default
	#     'docpad.js'
	#     'docpad.coffee'
	#     'docpad.json'
	#     'docpad.cson'
	# ]

	# Plugin Paths
	# An array of special paths which to load single plugins from
	# (e.g., ['/a/path/to/a/docpad-plugin-special'])
	#pluginPaths: ['/plugins/docpad-plugin-lunr/out/lunr.plugin.js']  # default

	# Plugins Paths
	# An array of paths which to load multiple plugins from
	# pluginsPaths: [  # default
	#     'node_modules'
	#     'plugins'
	# ]

	# Reload Paths
	# An array of special paths that when changes occur in, we reload our configuration
	reloadPaths: []  # default

	# Regenerate Paths
	# An array of special paths that when changes occur in, we regenerate our website
	regeneratePaths: []  # default

	# Regenerate Delay
	# The time (in milliseconds) to wait after a source file has
	# changed before using it to regenerate. Updating over the
	# network (e.g., via FTP) can cause a page to be partially
	# rendered as the page is regenerated *before* the source file
	# has completed updating: in this case increase this value.
	regenerateDelay: 0    # default
	watchOptions: [
		'catchupDelay': 0
	]

	# Out Path
	# Where should we put our generated website files?
	# If it is a relative path, it will have the resolved `rootPath` prepended to it
	outPath: 'out'  # default

	# Src Path
	# Where can we find our source website files?
	# If it is a relative path, it will have the resolved `rootPath` prepended to it
	srcPath: 'src'  # default

	# Documents Paths
	# An array of paths which contents will be treated as documents
	# If it is a relative path, it will have the resolved `srcPath` prepended to it
	# documentsPaths: [  # default
	#     'render'
	#     'documents'
	# ]

	# Files Paths
	# An array of paths which contents will be treated as files
	# If it is a relative path, it will have the resolved `srcPath` prepended to it
	filesPaths: [  # default
	    'static'
	    'files'
	    'public'
	]

	# =================================
	# Template Data
	# These are variables that will be accessible via our templates
	# To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ

		#regenerateDelay: 300    # default
	layoutsPaths: [
		'layouts'
	]

	# Ignore Paths
	# Can be set to an array of absolute paths that we should ignore from the scanning process
	ignorePaths: [
		'render/css/'
		'render/js/'
	] # default

	# Ignore Hidden Files
	# Whether or not we should ignore files that start with a dot from the scanning process
	ignoreHiddenFiles: true # default

	# Ignore Common Patterns
	# Whether or not we should ignore commonly undesired files from the scanning process
	# (e.g., .DStore, thumbs.db, .git, files that start with a tilda, etc.)
	ignoreCommonPatterns: true # default

	# Ignore Custom Patterns
	# Can be set to a regex of custom patterns to ignore from the scanning process
	ignoreCustomPatterns: false # default

	templateData:

		# Specify some site properties
		site:
			# The production url of our website
			url: "http://cm-spb.ru"
			# outPath: './output'


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
				"/bower_components/handsontable/dist/handsontable.full.css"
				"/bower_components/handsontable/plugins/bootstrap/handsontable.bootstrap.css"
				"/bower_components/lightbox2/dist/css/lightbox.css"
					#"//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
									"/css/index.css"


			]

			# Scripts
			scripts: [
				"//netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
				"//blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"
				"/js/tree.js"
				"/js/uhpv-full.min.js"
				"http://pupunzi.com/mb.components/mb.YTPlayer/demo/inc/jquery.mb.YTPlayer.js"
				"/js/jquery.diamonds.js"
				"/js/date.js"
				"https://rawgit.com/kimmobrunfeldt/progressbar.js/1.0.0/dist/progressbar.js"
				"/js/jquery.vide.js"
				"/bower_components/jquery-textfill/source/jquery.textfill.min.js"
				"/bower_components/handsontable/dist/handsontable.full.js"
				"/bower_components/ngHandsontable/dist/ngHandsontable.min.js"
				"/bower_components/angular-resource/angular-resource.min.js"
				"/bower_components/lightbox2/dist/js/lightbox.js"
				"/bower_components/bootstrap-autohidingnavbar/dist/jquery.bootstrap-autohidingnavbar.min.js"
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
			database.findAllLive({$and:[
				layout:'faces',
				img:$exists:true]}, [lastname:1])
		contacts: (database) ->
			database.findAllLive({type:$has:'contacts'}, [order:1])
		# gallery: (database) ->
		# 	database.findAllLive({layout:$has:'gallery'})



	# =================================
	# Plugins

	# getIndex: ->
	# 	@getCollection('html')
	# getArticles: ->
	# 	@getCollection('html').findAllLive(type:'post',[ date:-1])
	getLinks: ->
		@getCollection('html').findAllLive(type: 'link',[name:1])

	plugins:
		sitemap:
			cachetime: 600000
			changefreq: 'weekly'
			priority: 0.5
			filePath: 'sitemap.xml'
		nodesass:
			options:
				importer: require('node-sass-import-once')
				debugInfo: 'normal'
				outputStyle: 'nested'
				importOnce:
					index: true # @import 'foo'; will load foo/_index.scss if foo is a folder
					css: true # @import 'bar'; will import bar.css
					bower: true # automatically search bower_components directory for imports
		sitemap:
		  cachetime: 600000
		  changefreq: 'weekly'
		  priority: 0.5
		  filePath: 'sitemap.xml'
		redirector:
			redirects:
			    # source: destination
			    "project/": "http://new-site.com/"
			    "project/info.html": "http://new-site.com/new-info-page"


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
	environments:
		development:
			templateData:
				site:
					services:
						vkGroup: false
						vkNews: false
						vkComments: false
						googleAnalytics: false


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
