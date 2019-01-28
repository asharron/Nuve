const express = require('express');
const rp = require('request-promise-native');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const fs = require('fs');
const guessit = require('guessit-exec');

const tmdbconfig = require('./tmdb.json');
const tmdbKey = process.env.TMDB_API_KEY;
const movieSearch = "https://api.themoviedb.org/3/search/movie";
const imageUrl = tmdbconfig.images.secure_base_url;
console.log(tmdbKey);

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

//Returns a promise of the API data gathered from a filename
function queryVideoData(filename) {
	return guessit(filename).then(data => {
		const title = data.title;
		console.log(data);
		const options = {
			method: "GET",
			uri: movieSearch + `?api_key=${tmdbKey}&query=${title}`,
			json: true
		}
		return rp(options);
	}).then((data) => {
		return data
	}).catch(e => {
		console.log("Shit: Something went wrong");
		console.log(e);
	});
}

queryVideoData("Office").then((data) => {
	console.log("HERE IS THE DATA: ", data.results[0]);
}).catch((e) => {
	console.log("What the fuck just happened?");
});

//Allows it to be able to parse json from front-end requests
app.use(bodyParser.json());

//Serves up the built React files
app.use(express.static(path.join(__dirname, '/dist')));
//Serves up video files based on url
app.use("/videos", express.static(path.join(__dirname, "/videos")));

//API endpoint to return URL of video
app.get('/video', (req, res) => {
	console.log("Received request!");
	res.send({ url: filemap["sample"] });
});

app.get("/findMovie", (req, res) => {
	console.log("Got a request!");
	console.log(req.body);
	const title = req.body.title;
	queryVideoData(title).then((data) => {
		res.send(data);
	}).catch((e) => {
		console.log("What the fuck just happened?");
	});
});


//Start the server
app.listen(8080, () => {
	console.log("Listening on 8080");
});
