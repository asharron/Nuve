import React, { Component } from 'react'
import { FaHeartO } from 'react-icons/fa'

class Poster extends Component{
  render(){
    return(
      <div className="grid-item">
          <div className="hovereffect">
          <a href="/movie-preview.html" className="heart">

              <img className="img-responsive" height="300px" src={this.props.img} alt=""/>

                  <div className="title">
                      {this.props.title}
                      </div>
                       <div className="sub-text">
                      {this.props.year}
                      </div>
                      </a>

          </div>
      </div>
    )
  }
}
export default Poster
