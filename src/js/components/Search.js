import React, { Component } from 'react'

class Search extends Component{
  render(){
    return(
        <div className="container">
          <input type="checkbox" id="search" hidden="hidden" checked />
          <main>
            <section className="search">
              <form action="">
                <input type="search" placeholder="Search..."/>
              </form>
            </section>
          </main>
        </div>
    )
  }
}
export default Search
