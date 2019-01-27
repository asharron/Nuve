import React, { Component } from 'react'

class SeasonCover extends Component{
  render(){
    return(
      [<input type="radio" name="cover-item" id={"cover-"+this.props.season}/>,
      <li className="coverflow-item">
        <label htmlFor={"cover-"+ this.props.season}>
          <figure className="album-cover">
            <img src={this.props.img} />
          </figure>
        </label>
      </li>]
    )
  }
}
export default SeasonCover
