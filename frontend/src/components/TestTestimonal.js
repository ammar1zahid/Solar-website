import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestTestimonal = () => {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
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
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: '600px' }}>
          <h6 className="text-primary">Testimonial</h6>
          <h1 className="mb-4">What Our Clients Say!</h1>
        </div>
        <OwlCarousel className='owl-theme testimonial-carousel wow fadeInUp' {...options}>
          {/* Testimonial Item 1 */}
          <div className="testimonial-item text-center">
            <div className="testimonial-img position-relative">
              <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-1.jpg" alt="Client" />
              <div className="btn-square bg-primary rounded-circle">
                <i className="fa fa-quote-left text-white"></i>
              </div>
            </div>
            <div className="testimonial-text text-center rounded p-4">
              <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed...</p>
              <h5 className="mb-1">Client Name</h5>
              <span className="fst-italic">Profession</span>
            </div>
          </div>

          {/* Testimonial Item 2 */}
          <div className="testimonial-item text-center">
            <div className="testimonial-img position-relative">
              <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-2.jpg" alt="Client 2" />
              <div className="btn-square bg-primary rounded-circle">
                <i className="fa fa-quote-left text-white"></i>
              </div>
            </div>
            <div className="testimonial-text text-center rounded p-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <h5 className="mb-1">Client Name 2</h5>
              <span className="fst-italic">Profession 2</span>
            </div>
          </div>

          {/* Add more testimonial items as needed */}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TestTestimonal;
