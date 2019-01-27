import React, { Component } from 'react'
import SeasonCover from './SeasonCover'

class SeasonBrowser extends Component{
  render(){
    var results =  [
    {
      "season": "1",
      "img": "https://image.tmdb.org/t/p/w130_and_h195_bestv2/p5J0apmEruO7W9HSeZ0hM1FLNFY.jpg"
    },
    {
      "season": "2",
      "img": "https://image.tmdb.org/t/p/w130_and_h195_bestv2/aOPxLPlTxoRZnYV9CaVkujQjhGU.jpg"
    },
    {
      "season": "3",
      "img": "https://image.tmdb.org/t/p/w130_and_h195_bestv2/jiqKtubnjmmggiW9SASTaPPF7fM.jpg"
    },
    {
      "season": "4",
      "img": "https://image.tmdb.org/t/p/w130_and_h195_bestv2/80M3anFixvrSXhx6OzlZFZMQGDS.jpg"
    },
    {
      "season": "5",
      "img": "https://image.tmdb.org/t/p/w130_and_h195_bestv2/4FWhJb5iGIlsQ6arQoVDYspaBqe.jpg"
    },
    {
      "season": "6",
      "img": "https://image.tmdb.org/t/p/w130_and_h195_bestv2/6pctePUEX6KORycD9wQm77Y5bs2.jpg"
    },
    {
      "season": "7",
      "img": "https://image.tmdb.org/t/p/w130_and_h195_bestv2/ig9MjY78d9eYo2TcJebYzc0XtmJ.jpg"
    },
    {
      "season": "8",
      "img": "https://image.tmdb.org/t/p/w130_and_h195_bestv2/oJzkhOCQHf4zwhdI1jxP0IeoRX.jpg"
    },
    {
      "season": "9",
      "img": "https://image.tmdb.org/t/p/w130_and_h195_bestv2/aqXrn1s8pnHMJI9NbMJ6tvVEUif.jpg"
    }
  ]
    return(
      <div className="main-container">
        <div className="coverflow-container">
          <ol className="coverflow-list">
          {results.map(function(result, index){
                return <SeasonCover season={result.season} img={result.img} />;
            })}
          </ol>
        </div>
        <div className="controls">
        {results.map(function(result, index){
              return <label htmlFor={"cover-"+result.season}>{result.season}</label>;
          })}

          </div>
      </div>
    )
  }
}
export default SeasonBrowser
