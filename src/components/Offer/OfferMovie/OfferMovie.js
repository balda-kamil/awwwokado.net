import React, { Xomponent } from 'react';
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
    const height = document.getElementById('offer_anim').offsetHeight;
    const offset = document.getElementById('offer__movie').offsetTop;
    const momentWhenPlay = offset + (height / 1.5)

    // (momentWhenPlay >= (window.pageYOffset + viewPortheight)) && "start filmiku";
    if(momentWhenPlay <= (window.pageYOffset + viewPortheight)){
      console.log(momentWhenPlay)
      console.log('leci')
    }

    console.log(height, offset)
    console.log(window.pageYOffset + viewPortheight)

  }

  render(){ 
    return(
      <div id="offer_anim" className="m-0-auto">
        <video id="offer__movie" src={ MovieAnimation } type="video/mp4" className="offer__movie"></video>
      </div>
    )
  }
}

export default OfferMovie;