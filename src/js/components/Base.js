import React, { Component } from 'react'
import Results from './Results'
import Search from './Search'
import Preview from './Preview'
import SeasonBrowser from './SeasonBrowser'
import Navbar from './Navbar'
import EpisodeList from './EpisodeList'

class Base extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Search />
        <Preview title="Adventure Time" year="2010" summary="Adventure Time is an American animated television series created by Pendleton Ward for Cartoon Network. The series follows the adventures of Finn, a human boy, and his best friend and adoptive brother Jake, a dog with magical powers to change shape and grow and shrink at will. Finn and Jake live in the post-apocalyptic Land of Ooo. Along the way, they interact with the other main characters of the show: Princess Bubblegum, The Ice King, and Marceline the Vampire Queen." cover="https://image.tmdb.org/t/p/original/ftVVl9zg4Kiuwr25IJhJ2vaxCBR.jpg" img="https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"/>
        <EpisodeList />
      </div>
    )
  }
}
export default Base
// <Results />

//<Preview title="Adventure Time" year="2010" cover="https://image.tmdb.org/t/p/original/ftVVl9zg4Kiuwr25IJhJ2vaxCBR.jpg" img="https://image.tmdb.org/t/p/original/80G8BH8SOSW59J6mZka4XVzg7zI.jpg"/>
//        <SeasonBrowser />
