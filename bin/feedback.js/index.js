#!/usr/local/bin/node
// grab the packages we need
let express = require('express');
let app = express();
let port = process.env.PORT || 8080;
let couchdb = process.env.COUCHDB || 'http://admin:sdc888@localhost:5984:';
let cors = require('cors');
let bodyParser = require('body-parser');
let nano = require('nano')(couchdb);
let $db = nano.use('feedback');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
	limit: '50mb',   // to support URL-encoded bodies
  extended: true
}));

app.use(cors());

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

app.post('/',  cors(), (req, res) => {
	let data=JSON.parse(req.body.data);
	console.dir('req: ', data);
	$db.insert({data}, (err, body) => {
		if(err) console.error(err);
		console.log(body);
	});

	res.send('ok');
});
