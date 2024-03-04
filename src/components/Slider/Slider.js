import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Slider(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          
        autoplaySpeed: 3000,    
        arrows: true
      };
    
      return (
        <Slider {...settings}>
          <div>
            <img src="https://i.imgur.com/gz93ozD.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="https://i.imgur.com/liB7wvo.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="https://i.imgur.com/gF0VzD1.png" alt="Image 3" />
          </div>
        </Slider>
      );
}