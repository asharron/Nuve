import React, { Component } from "react";

class Preview extends Component {
  state = {
    img: "https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg",
    title: "Adventure Time",
    year: "2010",
    cover:
      "https://image.tmdb.org/t/p/original/ftVVl9zg4Kiuwr25IJhJ2vaxCBR.jpg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  render() {
    return (
      <div className="preview">
        <div
          className="poster"
          style={{ backgroundImage: "url(" + this.state.img + ")" }}
        >
          <img src={this.state.img} />
        </div>
        <div
          className="brief"
          style={{ backgroundImage: "url(" + this.state.cover + ")" }}
        >

          <div
            className="custom-bg"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(8.63%, 39.22%, 38.04%, 0.98) 0%, rgba(8.63%, 39.22%, 38.04%, 0.88) 100%)"
            }}
          >
          <h1>{this.state.title}</h1>
          <h4>{this.state.year}</h4>
          <p>{this.state.summary}</p>
        </div>



        </div>
      </div>
    );
  }
}
export default Preview;
