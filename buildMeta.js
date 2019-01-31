const guessit = require('guessit-wrapper');
const fs = require('fs');
const rp = require('request-promise-native');
const path = require('path');


const tmdbconfig = require('./tmdb.json');
const tmdbKey = process.env.TMDB_API_KEY;
const movieSearch = "https://api.themoviedb.org/3/search/movie";
const tvSearch = "https://api.themoviedb.org/3/search/tv"
const imageUrl = tmdbconfig.images.secure_base_url;
const posterSize = "w500";
const backdropSize = "w780"

//Test data structure
//TODO: Commit this to DB or FS so it doesn't have to build on start every time
var filemap = {};

function createMetadata() {

    //Read the files in the video directory
    //TODO: Recurse through directories 
    fs.readdir(path.join(__dirname, "/videos"), (err, files) => {
        //Create / check for metadata for each one
        files.forEach((name) => {
            //Only search for video files
            if (name.split('.').pop() == 'mp4') {
                //Create what the meta file would be named
                var metaname = name.split('.');
                metaname = metaname.slice(0, name.length - 1);
                metaname.pop();
                metaname = metaname.join('') + "meta.json";
                console.log(path.join(__dirname, "/videos", metaname));
                if (fs.existsSync(path.join(__dirname, "/videos", metaname))) {
                    //Do nothing
                    console.log("Found metadata for ", name);
                } else {
                    //Guess the move name and grab the data on it
                    guessit.parseName(name).then((guess) => {
                        //TODO: handle tv vs movie
                        //TODO: handle seasons
                        const title = guess.title || guess.other;
                        console.log(guess);
                        const options = {
                            method: "GET",
                            uri: tvSearch + `?api_key=${tmdbKey}&query=${title}`,
                            json: true
                        }
                        return rp(options);
                    }).then((data) => {
                        //Now write the data
                        filemap[name] = metaname;
                        //TODO: Handle NULL Values
                        movieData = {
                            title: data.results["0"].title || '',
                            poster: imageUrl + posterSize + data.results["0"].poster_path || '',
                            backdrop: imageUrl + backdropSize + data.results["0"].backdrop_path || '',
                            overview: data.results["0"].overview || '',
                            released: data.results["0"].release_date || '',
                            genres: data.results["0"].genre_ids || ''
                        };
                        jsonMovieData = JSON.stringify(movieData);
                        console.log(metaname);
                        fs.open(path.join(__dirname, "/videos/", metaname), "w", (err, fd) => {
                            if (err) {
                                console.log("OH MY GOD!");
                                console.log(err);
                            } else {
                                fs.write(fd, jsonMovieData, 'utf8', () => {
                                    console.log(metaname, " has been written");
                                })
                            }
                        });
                        return data
                    }).catch(e => {
                        console.log("Shit: Something went wrong");
                        console.log(e);
                    });
                }
            } else {
                console.log("Ignoring ", name);
            }
        });
    });
}

function buildMap() {
    //Read the files in the video directory
    fs.readdir(path.join(__dirname, "/videos"), (err, files) => {

        //Create a url for each one
        files.forEach((name) => {
            filemap[name] = name.slice(0, name.length) + "meta.js";
        });
    });
}

createMetadata();