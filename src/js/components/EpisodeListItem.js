import React, { Component } from "react";

class EpisodeListItem extends Component {
  loadVideo(){
    console.log("video");
  }
  render() {
    return (
      <div className="episode col-sm-6">
      <div className="episode-hovereffect">
        <a className="heart" onClick={this.loadVideo}>
          <img
            className="img-responsive"
            width="300px"
            src={this.props.img}
            alt=""
          />

          <div className="title">{this.props.title}</div>
          <div className="sub-text">S{this.props.season}E{this.props.ep}</div>
        </a>
      </div>
      </div>
    );
  }
}
export default EpisodeListItem;
