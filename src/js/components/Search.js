import React, { Component } from "react";
import { store } from "../store";
import { connect } from "react-redux";

@connect(store => {
  return {
    showSearchbar: store.library.showSearchbar
  };
})
class Search extends Component {
  state = {
    query: ""
  };
  handleChange(stateKey, evt) {
    this.setState({ [stateKey]: evt.target.value });
  }
  render() {
    if (this.props.showSearchbar) {
      return (
        <input
          id="search"
          autoFocus
          type="search"
          placeholder="&#xf002; Search..."
          value={this.state.query}
          onChange={evt => this.handleChange("query", evt)}
        />
      );
    } else {
      return "";
    }
  }
}
export default Search;
