import React, { Component } from 'react'

class EpisodeListItem extends Component{
  render(){
    return(
      <div className="episode row">
        <div className="index col-1">
          <p>{this.props.index}</p>
        </div>
        <div className="title col-9">
          <p>{this.props.title}</p>
        </div>
        <div className="time col-2">
          <p>{this.props.time}</p>
        </div>

      </div>
    )
  }
}
export default EpisodeListItem
