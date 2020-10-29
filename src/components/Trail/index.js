import React from 'react'
import Slider from "react-slick";
import './styles.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import thumb from '../../assets/thumb.jpg'

function Trail(name) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };

    return (
        <>
            <h2>Trilho de {name}</h2>
            <Slider {...settings}>
                <div className="trail">
                    <div className="trail__container">
                        <img className="trail__container--picture" src={thumb} />
                        <p className="trail___container--title">Titulo thumb</p>
                        <p className="trail___container--description">Descrição da thumbs do vídeo em questão</p>
                    </div>
                </div>
                <div className="trail">
                    <div className="trail__container">
                        <img className="trail__container--picture" src={thumb} />
                        <p className="trail___container--title">Titulo thumb</p>
                        <p className="trail___container--description">Descrição da thumbs do vídeo em questão</p>
                    </div>
                </div>
                <div className="trail">
                    <div className="trail__container">
                        <img className="trail__container--picture" src={thumb} />
                        <p className="trail___container--title">Titulo thumb</p>
                        <p className="trail___container--description">Descrição da thumbs do vídeo em questão</p>
                    </div>
                </div>
                <div className="trail">
                    <div className="trail__container">
                        <img className="trail__container--picture" src={thumb} />
                        <p className="trail___container--title">Titulo thumb</p>
                        <p className="trail___container--description">Descrição da thumbs do vídeo em questão</p>
                    </div>
                </div>
                <div className="trail">
                    <div className="trail__container">
                        <img className="trail__container--picture" src={thumb} />
                        <p className="trail___container--title">Titulo thumb</p>
                        <p className="trail___container--description">Descrição da thumbs do vídeo em questão</p>
                    </div>
                </div>
                <div className="trail">
                    <div className="trail__container">
                        <img className="trail__container--picture" src={thumb} />
                        <p className="trail___container--title">Titulo thumb</p>
                        <p className="trail___container--description">Descrição da thumbs do vídeo em questão</p>
                    </div>
                </div>
                <div className="trail">
                    <div className="trail__container">
                        <img className="trail__container--picture" src={thumb} />
                        <p className="trail___container--title">Titulo thumb</p>
                        <p className="trail___container--description">Descrição da thumbs do vídeo em questão</p>
                    </div>
                </div>
                <div className="trail">
                    <div className="trail__container">
                        <img className="trail__container--picture" src={thumb} />
                        <p className="trail___container--title">Titulo thumb</p>
                        <p className="trail___container--description">Descrição da thumbs do vídeo em questão</p>
                    </div>
                </div>
            </Slider>
        </>
    );
  }
  
  export default Trail;
  