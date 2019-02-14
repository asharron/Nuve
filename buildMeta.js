const guessit = require('guessit-wrapper');
const fs = require('fs').promises;
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
function writeMetaMap(meta) {
    fs.open(path.join(__dirname, "metamap.json"), "w").then((fd) => {
        meta = JSON.stringify(meta);
        fs.writeFile(fd, meta, 'utf8').then(() => {
            console.log("The metamap has been written");
        });
    });
    return;
}

function createMetadataOld(name, index) {
    var meta = {};
    var promiseList = [];
    //Read the files in the video directory
    //TODO: Separate Movies & TV by folder
    fs.readdir(path.join(__dirname, "/videos"), (err, files) => {
        //Create / check for metadata for each one
        files.forEach((name, index) => {
            console.log(index);
            //Only search for video files
            if (name.split('.').pop() == 'mp4') {
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
                    meta[index] = movieData;
                    jsonMovieData = JSON.stringify(movieData);
                    console.log(metaname);
                    return data
                }).catch(e => {
                    console.log("Shit: Something went wrong");
                    console.log(e);
                }));
            } else {
                console.log("Ignoring ", name);
            }
        });
        Promise.all(promiseList).then(() => {
            writeMetaMap(meta);
            return;
        }).catch((err) => {
            console.log("Something went wrong when writing the metamap");
            console.log(err);
        });
    });
}

var meta = {};
var count = 0;

//TODO: Vibrant color palanting 
//TODO: Count number of seasons in library 

function createMetaData(directoryName) {
    var promiseList = [];

    return fs.readdir(directoryName).then((files) => {
        files.forEach((filename) => {
            promiseList.push(fs.lstat(path.join(directoryName, filename)).then((stat) => {
                if (stat.isDirectory()) {
                    //recurse through each directory
                    return createMetaData(path.join(directoryName, filename));
                } else {
                    //TODO: Check If it is mp4
                    //Build the metadata
                    return guessit.parseName(filename);
                }
            }).then((guess) => {
                //TODO: handle promise as return value
                if (!Array.isArray(guess) && guess) {
                    const title = guess.title || guess.other;
                    var searchType = guess.type === "movie" ? movieSearch : tvSearch;
                    const options = {
                        method: "GET",
                        uri: searchType + `?api_key=${tmdbKey}&query=${title}`,
                        json: true
                    }
                    return rp(options);
                } else {
                    return
                }
            }).then((data) => {
                //TODO: handle promise return value
                if (!Array.isArray(data) && data) {
                    //TODO: store in varaible
                    count++;
                    const index = count - 1;
                    movieData = {
                        id: index,
                        title: data.results["0"].title || '',
                        poster: data.results["0"].poster_path ? imageUrl + posterSize + data.results["0"].poster_path : '',
                        backdrop: data.results["0"].backdrop_path ? imageUrl + backdropSize + data.results["0"].backdrop_path : '',
                        overview: data.results["0"].overview || '',
                        released: data.results["0"].release_date || '',
                        genres: data.results["0"].genre_ids || '',
                        file: filename
                    };
                    meta[index] = movieData;
                    console.log("returning");
                    return
                } else {
                    return
                }
            }));
        });
        return Promise.all(promiseList);
    }).catch((err) => {
        console.log("Ooops, something went wrong");
        console.log(err);
    });
}

//createMetadata();
createMetaData(path.join(__dirname, "/videos")).then(() => {
    console.log("writing");
    writeMetaMap(meta);
}).catch((err) => {
    console.log("something wnet werong");
});