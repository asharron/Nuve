import React, { Component } from "react";
import Preview from "../Preview";
import EpisodeList from "../EpisodeList";

class SeriesPreview extends Component {
  render() {
    return (
      <div>
        <Preview />
        <EpisodeList />
      </div>
    );
  }
}
export default SeriesPreview;
