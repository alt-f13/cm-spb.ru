var nano = require('nano')('http://admin:3brd4ZDG@10.11.1.8:5984');
//var http = require('request');
var fs = require('fs');
var _url='https://api.vk.com/api.php?oauth=1&method=wall.get.json&domain=cmetro';

// var tmpobj = tmp.fileSync();
// console.log('File: ', tmpobj.name);

var $db = nano.use('cm-spb');
let http = require('superagent')

function _posts() {
	http.get(_url)
		.then(function(res) {
			var _posts=JSON.parse(res.text);
			_posts.response.map(function(post) {
				post.type="post";
				post._id="vk"+post.id;

				$db.insert(post, function(err, body) {
					console.log(body);
				})
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
