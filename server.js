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

//Serves up the built React files on every route
app.all("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "/dist/index.html"));
});

//Start the server
app.listen(8080, () => {
	console.log("Listening on 8080");
});