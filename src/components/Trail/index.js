import React, { useState, useEffect } from 'react'
import api from '../../service/api'
import Slider from "react-slick"
import './styles.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Trail(video) {

    const [trails, setTrails] = useState([]);

    async function getTrails(termFromSearchBar) {
        await api.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        .then(response => {
            setTrails(response.data.items)
        })

    };

    useEffect(() => {
        getTrails(video);
    }, [])

    const settingsSlideTrail = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

      console.log(trails)

    return (
        <>
            <div className="trail">
                <h2 className="trail__title">Trilho de {video}</h2>
                <Slider {...settingsSlideTrail}>
                    {
                    trails.map((item, index) => (
                        <div key={index}>
                            <div className="trail__container">
                                <div className="trail__container--picture">
                                    <img alt={item.snippet.title} src={item.snippet.thumbnails.medium.url} />
                                </div>
                                <h3 className="trail__container--title">{item.snippet.title}</h3>
                                <p className="trail__container--description">{item.snippet.channelTitle}</p>
                            </div>
                        </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
  }
  
  export default Trail;
  