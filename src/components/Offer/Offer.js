import React from 'react';
import './Offer.css';

import OfferMovie from './OfferMovie/OfferMovie'

import expIco from './../../media/experience.png'
import helpIco from './../../media/help.png'
import comIco from './../../media/communication.png'


function Offer(){
  return(
    <>
      <div className="offer pt-100">
        <div className="offer__left_item">
          <h2 className="__light-subtitle color-blue">APLIKACJE, STRONY, SKLEPY, PORTALE</h2>
          <p className="__paragraph-normal mt-40">działające szybko, responsywne, miłe dla oka</p>
          <button className="btn-big mt-40">NAPISZ DO NAS</button>
        </div>
        <div className="offer__items">
          <div>
            <img src={ expIco } alt="icon" className="mb-30"/>
            <p className="fw-700">DOŚWIADCZENIE</p>
            <p className="fw-100">Zapewnimy  wysoką jakość produktu finalnego. Nasi klienci otrzymują produkty które spełniają wszelkie wymagania. Pracujemy z wieloma specjalistami z dziwdziny marketingu, e-commerce czy SEO.</p>
          </div>
          <div>
            <img src={ helpIco } alt="icon" className="mb-30"/>
            <p className="fw-700">POMOC</p>
            <p className="fw-100">Stałe wspracie programistyczne minimalizuje ryzyko pojawienia się błędów i pozwala cieszyć się z efektów współpracy jeszcze bardziej. W razie jakichkolwiek komplikacji czy pytań jesteśmy do dyspozycji.</p>
          </div>
          <div>
            <img src={ comIco } alt="icon" className="mb-30"/>
            <p className="fw-700">KOMUNIKACJA</p>
            <p className="fw-100">Jesteśmy firmą która słucha wizji swoich klientów, aby byla ona zgodna z naszą. Każdą stronę czy platformę tworymy od podstaw, dopasowaną pod Ciebie.</p>
          </div>
        </div>
      </div>
      <OfferMovie/>
    </>
  )
}

export default Offer;