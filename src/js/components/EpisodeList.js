import React, { Component } from "react";
import EpisodeListItem from "./EpisodeListItem";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { MdSwapVert } from "react-icons/md";

import { store } from "../store";
import { connect } from "react-redux";

@connect(store => {
  return {
    showSeason: store.library.showSeason,
    flipSeasons: store.library.flipSeasons
  };
})
class EpisodeList extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }
  changeSeason(season){
    const payload = {season: season}
      store.dispatch({type: "SELECT_SEASON", payload})
      this.scrollToTop()
  }
  flipSeasons(){
    store.dispatch({type: "FLIP_SEASONS"})
  }

  render() {
    const ref = this
    var episodes = [
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      },
      {
        ep: 1,
        title: "Nobody's Home",
        time: "21:58",
        img: "https://image.tmdb.org/t/p/w227_and_h127_bestv2/9vTB5CaQIeitwd97OrZtMJXoER3.jpg",
        desc: "A long lost artifact causes Princess Bubblegum to harken back to the creation of the Candy Kingdom."
      }
    ];
    var seasons = [
      { season: 1 },
      { season: 2 },
      { season: 3 },
      { season: 4 },
      { season: 5 },
      { season: 6 },
      { season: 7 },
      { season: 8 },
      { season: 9 },
      { season: 10 },
      { season: 11 },
      { season: 12 },
      { season: 13 },
      { season: 14 },
      { season: 15 },
      { season: 16 },
      { season: 17 },
      { season: 18 },
      { season: 19 },
      { season: 20 }
    ];
    if (this.props.flipSeasons) {
      seasons = seasons.reverse();
    }
    return (
      <div className="episode-list container">
        <div className="row">
          <div className="col-sm-3 nopad">
          <div className="list-header">
           <h2>SEASONS</h2>
            <h3 onClick={this.flipSeasons}><MdSwapVert /></h3>
            </div>
            <div className="seasons">
              {seasons.map(function(s, index) {
                let active;
                if (s.season === ref.props.showSeason) {
                  active = "active"
                }
                return <h4 onClick={()=>ref.changeSeason(s.season)} className={active} key={index}>{"Season " + s.season}</h4>;
              })}
            </div>
          </div>
          <div className="col-sm-9">
          <div className="list-header">
           <h2>EPISODES</h2>
            <h3 onClick={this.flipSeasons}><MdSwapVert /></h3>
            </div>
            {episodes.map(function(episode, index) {
              return (
                <EpisodeListItem
                  season={ref.props.showSeason}
                  key={index}
                  ep={episode.ep}
                  title={episode.title}
                  img={episode.img}
                  desc={episode.desc}
                  time={episode.time}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default EpisodeList;
