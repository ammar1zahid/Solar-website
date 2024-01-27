import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Carousel() {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      };
  
      return (
        <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
          <OwlCarousel className='owl-theme' {...options}>
            <div className='item'>
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Carousel 1" />
              <div className="carousel-caption text-start">
                <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem...</p>
                <a href="#" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
              </div>
            </div>
            <div className='item'>
              <img className="img-fluid" src="img/carousel-2.jpg" alt="Carousel 2" />
              <div className="carousel-caption text-start">
                <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem...</p>
                <a href="#" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
              </div>
            </div>
            <div className='item'>
              <img className="img-fluid" src="img/carousel-3.jpg" alt="Carousel 3" />
              <div className="carousel-caption text-start">
                <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem...</p>
                <a href="#" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
              </div>
            </div>
          </OwlCarousel>
        </div>
      );
}
