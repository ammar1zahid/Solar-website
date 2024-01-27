import React, { useState } from 'react';

export default function ProjectTest() {
  const [filter, setFilter] = useState('*');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const projects = [
    { id: 1, category: 'first', image: 'img/img-600x400-6.jpg', title: 'Solar Panels', description: 'We are pioneers of solar & renewable energy industry' },
    { id: 2, category: 'second', image: 'img/img-600x400-5.jpg', title: 'Wind Turbines', description: 'We are pioneers of solar & renewable energy industry' },
    { id: 3, category: 'third', image: 'img/img-600x400-4.jpg', title: 'Hydropower Plants', description: 'We are pioneers of solar & renewable energy industry' },
    // Add more projects as needed
  ];

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h6 className="text-primary">Our Projects</h6>
            <h1 className="mb-4">Visit Our Latest Solar And Renewable Energy Projects</h1>
          </div>
          <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li className={`mx-2 ${filter === '*' ? 'active' : ''}`} onClick={() => handleFilterChange('*')}>All</li>
                <li className={`mx-2 ${filter === 'first' ? 'active' : ''}`} onClick={() => handleFilterChange('first')}>Solar Panels</li>
                <li className={`mx-2 ${filter === 'second' ? 'active' : ''}`} onClick={() => handleFilterChange('second')}>Wind Turbines</li>
                <li className={`mx-2 ${filter === 'third' ? 'active' : ''}`} onClick={() => handleFilterChange('third')}>Hydropower Plants</li>
              </ul>
            </div>
          </div>
          <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
            {projects
              .filter((project) => filter === '*' || project.category === filter)
              .map((project) => (
                <div key={project.id} className={`col-lg-4 col-md-6 portfolio-item ${project.category}`}>
                  <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src={project.image} alt="" />
                    <div className="portfolio-btn">
                      <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href={project.image} data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                      <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="#"><i className="fa fa-link" /></a>
                    </div>
                  </div>
                  <div className="pt-3">
                    <p className="text-primary mb-0">{project.title}</p>
                    <hr className="text-primary w-25 my-2" />
                    <h5 className="lh-base">{project.description}</h5>
                  </div>
                </div>            
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
