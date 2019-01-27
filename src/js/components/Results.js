import React, { Component } from 'react'
import Poster from './Poster';

class Results extends Component{
  render(){
    var results =  [
    {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    },
       {
      "title": "Adventure Time",
      "year": 2010,
      "img": "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"
    }
  ]
    return(
      <div className="container grid" data-isotope='{ "itemSelector": ".grid-item", "layoutMode": "fitRows" }'>
          {results.map(function(result, index){
                return <Poster title={result.title} year={result.year} img={result.img} />;
            })}
      </div>
    )
  }
}
export default Results
