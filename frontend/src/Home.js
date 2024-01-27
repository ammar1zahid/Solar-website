import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import TopBar from './components/TopBar'
import Feature from './components/Feature'
import About from './components/About'
import Service from './components/Service'
import ChooseUs from './components/ChooseUs'
import Project from './components/Project'
import Quote from './components/Quote'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Carousel from './components/Carousel'





export default function Home() {
  return (
    <div>

<div>


  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{"width":"3rem","height":"3rem"}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}

  <TopBar/>
   
  <NavBar/>

  {/* <!-- Carousel Start --> */}

  <Carousel/>





  {/* <!-- Feature Start --> */}
  <Feature/>
  
  

  {/* <!-- About Start -->   */}
  <About/>


  {/* <!-- Service Start --> */}
  <Service/>  


  {/* <!-- Feature Start --> */}
  <ChooseUs/>



  {/* <!-- Projects Start --> */}
  <Project/>


  {/* <!-- Quote Start --> */}
  <Quote/>


  {/* <!-- Team Start --> */}
  <Team/>


  {/* <!-- Testimonial Start --> */}
  <Testimonial/>

 {/* Footer Start */}
  <Footer/>

 


  <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
</div>



    </div>
  )
}
