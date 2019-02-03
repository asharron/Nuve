const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const metamap = require('./metamap.json');

//Allows it to be able to parse json from front-end requests
app.use(bodyParser.json());

//Static assets for React
app.use(express.static(path.join(__dirname, "/dist")));
//Serves up video files based on url
app.use("/videos", express.static(path.join(__dirname, "/videos")));

//Returns JSON of video info for one particular movie
app.get('/api/videoinfo', (req, res) => {
	data = metamap[req.query.id] || { error: "That id could not be found" };
	res.send(data);
});

//TODO: Return Movie Season

//Returns JSON of video info for number of videos specfied
app.get('/api/videos', (req, res) => {
	data = {};
	var start = req.query.start || 0;
	var end = req.query.end || 10;
	for (var i = start; i < end; i++) {
		data[i] = metamap[i] || {};
	}
	res.send(data);
})

//Serves up the built React files on every route
app.all("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "/dist/index.html"));
});

//Start the server
app.listen(8080, () => {
	console.log("Listening on 8080");
});