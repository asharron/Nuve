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


//Writes the completed movie metadata to disk
function writeMetaMap(filemap) {
    fs.open(path.join(__dirname, "metamap.json"), "w", (err, fd) => {
        if (err) {
            console.log("Shit is about to go down");
            console.log(err);
        } else {
            filemap = JSON.stringify(filemap);
            fs.write(fd, filemap, 'utf8', () => {
                console.log("The metamap has been written");
            })
        }
    });
}

function createMetadata() {
    var filemap = {};
    var promiseList = [];
    //Read the files in the video directory
    //TODO: Recurse through directories 
    fs.readdir(path.join(__dirname, "/videos"), (err, files) => {
        //Create / check for metadata for each one
        files.forEach((name, index) => {
            console.log(index);
            //Only search for video files
            if (name.split('.').pop() == 'mp4') {
                //Create what the meta file would be named
                var metaname = name.split('.');
                metaname = metaname.slice(0, name.length - 1);
                metaname.pop();
                metaname = metaname.join('') + "meta.json";
                console.log(path.join(__dirname, "/videos", metaname));
                if (fs.existsSync(path.join(__dirname, "/videos", metaname))) {
                    console.log("Found metadata for ", name);
                } else {
                    //Guess the move name and grab the data on it
                    promiseList.push(guessit.parseName(name).then((guess) => {
                        //TODO: handle seasons
                        const title = guess.title || guess.other;
                        console.log(guess);
                        var searchType;
                        if (guess.type === "movie") {
                            searchType = movieSearch
                        } else {
                            searchType = tvSearch
                        }
                        const options = {
                            method: "GET",
                            uri: searchType + `?api_key=${tmdbKey}&query=${title}`,
                            json: true
                        }
                        return rp(options);
                    }).then((data) => {
                        //Now write the data
                        movieData = {
                            id: index,
                            title: data.results["0"].title || '',
                            poster: data.results["0"].poster_path ? imageUrl + posterSize + data.results["0"].poster_path : '',
                            backdrop: data.results["0"].backdrop_path ? imageUrl + backdropSize + data.results["0"].backdrop_path : '',
                            overview: data.results["0"].overview || '',
                            released: data.results["0"].release_date || '',
                            genres: data.results["0"].genre_ids || ''
                        };
                        filemap[index] = movieData;
                        jsonMovieData = JSON.stringify(movieData);
                        console.log(metaname);
                        fs.open(path.join(__dirname, "/videos/", metaname), "w", (err, fd) => {
                            if (err) {
                                console.log("OH MY GOD!");
                                console.log(err);
                            } else {
                                fs.write(fd, jsonMovieData, 'utf8', () => {
                                    console.log(metaname, " has been written");
                                });
                            }
                        });
                        return data
                    }).catch(e => {
                        console.log("Shit: Something went wrong");
                        console.log(e);
                    }));
                }
            } else {
                console.log("Ignoring ", name);
            }
        });
        Promise.all(promiseList).then(() => {
            writeMetaMap(filemap);
            return;
        }).catch((err) => {
            console.log("Something went wrong when writing the metamap");
            console.log(err);
        });
    });
}

createMetadata();