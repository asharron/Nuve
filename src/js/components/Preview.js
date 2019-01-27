import React, { Component } from 'react'
import * as Vibrant from 'node-vibrant'


class Preview extends Component{
  render(){
    var color
    Vibrant.from(this.props.img).getPalette(function(err, palette) {
      var color = "rgba("+palette.DarkVibrant._rgb+",0.7)";
      console.log(color)
    });
    console.log(color)


    // var color = Vibrant.from(this.props.img).getPalette()
    // .then((palette) =>{
    //   return "rgba("+palette.DarkVibrant._rgb+",0.7)"
    // })


    return(
      <div className="preview">
        <div className="poster" style={{backgroundImage: "url(" + this.props.img + ")"}}>
        <img src={this.props.img} />
        </div>
        <div className="brief" style={{backgroundImage: "url(" + this.props.cover + ")"}}>
          <div className="custom-bg" style={{backgroundImage:"radial-gradient(circle at 20% 50%, rgba(8.63%, 39.22%, 38.04%, 0.98) 0%, rgba(8.63%, 39.22%, 38.04%, 0.88) 100%)"}}>
            <h1>{this.props.title}</h1>
            <h4>{this.props.year}</h4>
            <p>{this.props.summary}</p>
          </div>
        </div>
      </div>
    )
  }
}
// linear-gradient(0deg,rgba(255,0,150,0.7),rgba(255,0,150,0.7))
export default Preview
