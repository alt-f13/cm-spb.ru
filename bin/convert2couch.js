#!/usr/local/bin/node
//let nano = require('nano')('http://admin:sdc888@localhost:5984');
let nano = require('nano')('https://admin:3brd4ZDG@couch.2d-it.ru/');
const fs = require('fs-extra');
const _db = 'cm-spb';
// nano.db.destroy(_db, () => {
// 	nano.db.create(_db, () => {
//
// 	})
// })
const _ = require('lodash');
//yaml = require('js-yaml');
yaml = require('yaml-js');

let path = "./src/render";
YAML = require('yamljs');
let $db = nano.use('cm-spb');


fs.readdir(path+'/faces', function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
	files.forEach((file) => {
		console.log(file);
		let _id=file;
		try {
		  //var doc = yaml.parse(fs.readFileSync(path+'/'+file+'/index.html', 'utf8'));
			let doc = YAML.load(path+'/faces'+'/'+_id+'/index.html');
			doc = _.omit(doc, ['associatedFilesPath', 'associatedFilesRelative', 'layout', 'title']);
			doc._id=file;
			doc.type="human";
			console.log(doc);
			$db.get(doc._id, (err,body) => {
				let _rev;
				if (!err) {
					_rev=body._rev;
				}
				$db.destroy(doc._id, _rev,(err, body) => {
					console.log("destroy:", err);
					$db.insert(doc, doc._id, (err, body) => {
						console.log(body);
						if(!err) {
							fs.createReadStream(path+doc.img).pipe(
								$db.attachment.insert(doc._id, 'photo.jpg', null, 'image/jpeg', {rev: body.rev},(err,body) => {
									console.log(err, body);
								})
							)
						}


					});
				})
			})


		} catch (e) {
		  console.log(e);
		}
	})
});
