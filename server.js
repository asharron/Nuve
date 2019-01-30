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

//Allows it to be able to parse json from front-end requests
app.use(bodyParser.json());

//Serves up the built React files
app.use(express.static(path.join(__dirname, '/dist')));
//Serves up video files based on url
app.use("/videos", express.static(path.join(__dirname, "/videos")));

//Start the server
app.listen(8080, () => {
	console.log("Listening on 8080");
});