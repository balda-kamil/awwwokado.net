import React from 'react';
import './Footer.css';

import Logo from './../../media/logo_small.png'

function Footer(){
  return(
    <>
      <div className="row">
        <div>
          <img src={Logo} alt="awwwokado logo"/>
        </div>
      </div>
      <div className="row space-beetween">
        <div>
          <p className="footer__p">Kamil Balda</p>
          <p className="footer__p">Web Developer - CEO</p>
          <p className="footer__p">+48 691 806 687</p>
          <p className="footer__p">kamil@awwwokado.net</p>
        </div>
        <div>
          <button className="btn-big m-0">NAPISZ DO NAS</button>
        </div>
        <div>
          <p className="footer__p small_p">Pruszcz Gdański</p>
          <p className="footer__p small_p">al. Księdza Waląga 10/2</p>
          <p className="footer__p small_p mb-40">NIP: PL6040215537</p>
          <p className="footer__p small_p">©awwwokado.net</p>
          <p className="footer__p small_p">2020 All right reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer;