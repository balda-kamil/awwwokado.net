import React from 'react';
import './OfferMovie.css';
import MovieAnimation from './../../../media/rwdanimation.mp4'

class OfferMovie extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      moviePlay: false
    }
  }
  componentDidMount = () => {
    document.addEventListener('scroll', () => this.handlePlayVideo())   
  }

  handlePlayVideo = () => {
    const viewPortheight = document.documentElement.clientHeight
    const height = document.getElementById('oferta').offsetHeight;
    const video = document.getElementById('offer__movie')
    const offset = video.offsetTop;
    const momentWhenPlay = offset + (height / 1.5)

    if(momentWhenPlay <= (window.pageYOffset + viewPortheight) && this.state.moviePlay === false){
      this.setState({ 
        moviePlay: true
      })
      video.play()
    }
  }

  render(){ 
    return(
      <div id="oferta" className="m-0-auto">
        <video 
          ref="awwwwokado_video"
          id="offer__movie" 
          src={ MovieAnimation } 
          type="video/mp4" 
          className="offer__movie"
          muted="muted"
        />
      </div>
    )
  }
}

export default OfferMovie;