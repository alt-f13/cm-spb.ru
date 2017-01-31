var nano = require('nano')('http://admin:3brd4ZDG@10.11.1.8:5984');
//var http = require('request');
var fs = require('fs');
var mkdirp = require('mkdirp');
var yaml = require('js-yaml');
var YAML = require('yamljs');

var _url='https://api.vk.com/api.php?oauth=1&method=wall.get.json&domain=cmetro';

// var tmpobj = tmp.fileSync();
// console.log('File: ', tmpobj.name);

var $db = nano.use('cm-spb');
let http = require('superagent');
var home ="./src/render/posts/vk";

mkdirp(home, function(err) {
	console.log(err);
});

function _posts() {
	http.get(_url)
		.then(function(res) {
			var _posts=JSON.parse(res.text);
			_posts.response.map(function(post) {
				var directory=home+"/"+post.id;
				post._id="vk"+post.id;

				post.layout="vkpost";
				post.tags = ['post'];
				delete post.comments;
				delete post.likes;
				delete post.reposts;
				delete post.id;

				if(!fs.existsSync(directory)){
				    fs.mkdirSync(directory, 0777, function(err){
				        if(err){
				            console.log(err);
				            // echo the result back
				        }

				    });
				}
				fs.writeFile(directory+"/index.html", "---\n"+YAML.stringify(post)+"\n---\n", function(err) {
					if(err) {
							return console.log(err);
						}

						console.log("The file was saved!");
					});

				// $db.insert(post, function(err, body) {
				// 	console.log(body);
				// })


			})

			// $db.attachment.insert(_rows[i].id, "image0.jpg", res.body, res.get('Content-Type'), {"rev": _rows[i].value._rev}, function(resp) {
			// 	console.log(resp);
			// })
			console.log(_posts.response);
		})
		.catch(function(err) {
			console.log(err);
		})
}
_posts();


 function _rows() {

   $db.view('db', 'parts-images', function(err, body) {
       if (!err) {
         _rows=body.rows;
         console.log(_rows);
         //return body.rows
         vo(run)(function(err, result) {
             if (err) throw err;
         });

       }else{
         console.log(err);
       }
   });
 }
