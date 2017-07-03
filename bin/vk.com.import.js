#!/usr/local/bin/node

var nano = require('nano')('http://admin:3brd4ZDG@10.11.1.8:5984');
//var http = require('request');
var fs = require('fs');
var mkdirp = require('mkdirp');
var yaml = require('js-yaml');
var YAML = require('yamljs');
var moment = require('moment');
// var VK = require('vkapi');
// var vk = new VK({
//     'appID'     : 5385298,
//     'appSecret' : 'lyOFUeaFheVU4Yyhk0bT',
//     'mode'      : 'sig'
// });
var cheerio = require('cheerio');
var _url='https://api.vk.com/api.php?oauth=1&method=wall.get.json&domain=cmetro&count=25&access_token=81387c5c81387c5c8165180ecd816a500e8813881387c5cd99f690f0f833a5440858dea';

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
			//console.log(res);
			var _posts=JSON.parse(res.text);
			_posts.response.map(function(post) {
				var directory=home+"/"+post.id;
				post._id="vk"+post.id;

				post.type="post";
				post.tags = ['post'];
				delete post.comments;
				delete post.likes;
				delete post.reposts;
				delete post.id;
				var _text=post.text;
				delete post.text;
				post.date = moment.unix(post.date).format('YYYY-MM-DD');
				//console.log(post.attachments);
				var _att=0;

				if(!fs.existsSync(directory+"/index.html")) {
					if(!fs.existsSync(directory))	fs.mkdirSync(directory, 0777);
					fs.writeFile(directory+"/index.html", "---\n"+YAML.stringify(post)+"\n---\n"+_text, function(err) {
						if(err) {
								return console.log(err);
							}
							console.log(directory, "The file was saved!");
							if(post.attachments) {
								post.attachments.map(function(i) {
									var _photo = i.photo;
									var _video = i.video;
									if((typeof(_photo) != 'undefined')) {
										var _file = fs.createWriteStream(directory+"/"+_att+".jpg");
										var req = http.get(_photo.src_big);
										req.pipe(_file);
									}else if (typeof(_video) != 'undefined'){
										_url = "https://vk.com/video"+i.video.owner_id+"_"+i.video.vid //+"&access_key="+i.video.access_key
										console.log("VIDEO:", _url, directory+"/");
									}
									_att++;
								});
							};
						});
				}
			})
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
         vo(run)(function(err, result) {
             if (err) throw err;
         });
       }else{
         console.log(err);
       }
   });
 }
