import React, { Component } from 'react'
import { MdSearch } from 'react-icons/md'
import { MdMenu } from 'react-icons/md'

class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">

    <ul className="nav navbar-nav d-flex w-50 mr-auto">
        <li className="nav-item icon">
            <a className="nav-link" href="#"><MdMenu /></a>
        </li>
    </ul>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul className="navbar-nav w-100 justify-content-center">
            <li className="nav-item active">
                <a className="nav-link" href="#">Movies</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Series</a>
            </li>
        </ul>
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
            <li className="nav-item icon">
                <a className="nav-link" href="#"><MdSearch /></a>
            </li>
        </ul>
    </div>
</nav>

    )
  }
}
export default Navbar
