import React from 'react'
import NavBar from './components/NavBar'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Service from './components/Service'
import ChooseUs from './components/ChooseUs'
import Testimonial from './components/Testimonial'
import Feature from './components/Feature'
import { Link } from 'react-router-dom'
import TestTestimonal from './components/TestTestimonal'


export default function ServicePage() {
  return (
      <>
        <TopBar/>

        <NavBar/>

    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={"/"} className="text-white" >Home</Link></li>
            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
            <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
            </ol>
        </nav>
        </div>
    </div>
    
        <Service/>

        <Feature/>

        <Testimonial/>

        {/* <TestTestimonal/> */}

        <Footer/>

        {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

      </>
  )
}
