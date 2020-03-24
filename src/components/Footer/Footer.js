import React from 'react';
import './Footer.css';

import FormikContactForm from './../ContactForm/ContactForm'

import Logo from './../../media/logo_small.png'

function Footer(){
  return(
    <>
      <div className="row">
        <div className="col-lg-4 col-md-3 col-sm-6">
          <img src={Logo} alt="awwwokado logo"/>
          <div className="plr-10">
          <p className="footer__p">Kamil Balda</p>
          <p className="footer__p">Web Developer - CEO</p>
          <p className="footer__p">+48 691 806 687</p>
          <p className="footer__p mb-40">kamil@awwwokado.net</p>
          <p className="footer__p small_p">Pruszcz Gdański</p>
          <p className="footer__p small_p">al. Księdza Waląga 10/2</p>
          <p className="footer__p small_p mb-40">NIP: PL6040215537</p>
          <p className="footer__p small_p">©awwwokado.net</p>
          <p className="footer__p small_p">2020 All right reserved</p>
        </div>
      </div>
        <FormikContactForm/>
      </div>
    </>
  )
}

export default Footer;