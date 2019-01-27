import React, { Component } from 'react'
import EpisodeListItem from './EpisodeListItem'


class EpisodeList extends Component{
  render(){
    var episodes =  [
      {
        "title": "Nobody's Home",
        "time": "21:58"
      },{
        "title": "Nobody's Home",
        "time": "21:58"
      },{
        "title": "Here's Home",
        "time": "21:58"
      },{
        "title": "There's Home",
        "time": "21:58"
      },{
        "title": "Keeper's Home",
        "time": "21:58"
      },{
        "title": "Feel's Home",
        "time": "21:58"
      },{
        "title": "Office's Home",
        "time": "21:58"
      },{
        "title": "Nobody's Home",
        "time": "21:58"
      },{
      "title": "Nobody's Home",
      "time": "21:58"
    }
  ]
  var seasons =  [
    {"season":1},
    {"season":2},
    {"season":3},
    {"season":4},
    {"season":5},
    {"season":6},
    {"season":7},
    {"season":8},
    {"season":9},
    {"season":10},
    {"season":11},
    {"season":12},
    {"season":13},
    {"season":14},
    {"season":15},
    {"season":16},
    {"season":17},
    {"season":18},
    {"season":19},
    {"season":20}
]
    return(
      <div className="episode-list container">
        <div className="row">
          <div className="col-sm-4">
          <h2>SEASONS</h2>
            <div className="seasons">
              {seasons.map(function(s, index){
                return <h4>{"Season "+s.season}</h4>;
              })}
            </div>
          </div>
          <div className="col-sm-8">
          <h2>EPISODES</h2>
            {episodes.map(function(episode, index){
                  return <EpisodeListItem index={index+1} title={episode.title} time={episode.time}/>;
            })}
          </div>

        </div>
      </div>
    )
  }
}
export default EpisodeList
