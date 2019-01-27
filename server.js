const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

//Test data structure
//TODO: Commit this to DB so it doesn't have to build on start every time
var filemap = {};

function buildMap() {
	//Read the files in the video directory
	fs.readdir(path.join(__dirname, "/videos"), (err, files) => {

		//Create a url for each one
		files.forEach((name) => {
			filemap[name.split(".")[0]] = "http://localhost:8080/videos/" + name;
		});
		console.log(filemap);
		console.log(filemap["sample"]);
	});
}

buildMap();


//Serves up the built React files
app.use(express.static(path.join(__dirname, '/dist')));
//Serves up video files based on url
app.use("/videos", express.static(path.join(__dirname, "/videos")));

//API endpoint to return URL of video
app.get('/video', (req, res) => {
	console.log("Received request!");
	res.send({ url: filemap["sample"] });
});


//Start the server
app.listen(8080, () => {
	console.log("Listening on 8080");
});
