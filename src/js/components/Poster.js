import React, { Component } from "react";
import { FaHeartO } from "react-icons/fa";
import { goTo } from "../Helpers";
import { store } from "../store";
import { connect } from "react-redux";

@connect(store => {
  return {
    type: store.library.selected
  };
})
class Poster extends Component {
  loadPreview = () => {
    const payload = {
      id: this.props.id
    };
    store.dispatch({ type: "LOAD_PREVIEW", payload });
    goTo(this.props.type + "/" + this.props.id);
  };
  render() {
    return (
      <div className="grid-item">
        <div className="hovereffect">
          <a className="heart" onClick={this.loadPreview}>
            <img
              className="img-responsive"
              height="300px"
              src={this.props.img}
              alt=""
            />

            <div className="title">{this.props.title}</div>
            <div className="sub-text">{this.props.year}</div>
          </a>
        </div>
      </div>
    );
  }
}
export default Poster;
