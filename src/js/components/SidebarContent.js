import React, { Component } from "react";

import { store } from "../store";
import { connect } from "react-redux";

class SidebarContent extends Component {


  render() {
    return(
      <div>
    <div className="sidebar">
      <h4>Item 1</h4>
      <h4>Item 1</h4>
      <h4>Item 1</h4>
      <h4>Item 1</h4>
      <h4>Item 1</h4>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
    </div>
    <div className="sidebar-footer">
    <div className="col-xs-3">
    <img width="50px" src="/img/logo.png"/>
    </div>
    <div className="col-xs-9" style={{textAlign:"right"}}>
    <p>V0.1 alpha</p>
    </div>
    </div>
    </div>
  );
  }
}
export default SidebarContent;
