import React from 'react'
import NavBar from './components/NavBar'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'


export default function ContactPage() {
  return (
    <>
    <TopBar/>

    <NavBar/>

  {/* <!-- Page Header Start --> */}
  <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={"/"} className="text-white" >Home</Link></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>



        {/* Contact Start */}
    <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{"margin":"6rem 0"}}>
    <div className="container contact px-lg-0">
        <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 ps-lg-0">
            <h6 className="text-primary">Contact Us</h6>
            <h1 className="mb-4">Feel Free To Contact Us</h1>
            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
            <form>
                <div className="row g-3">
                <div className="col-md-6">
                    <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{"height":"100px"}} defaultValue={""} />
                    <label htmlFor="message">Message</label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                </div>
                </div>
            </form>
            </div>
        </div>
        <div className="col-lg-6 pe-lg-0" style={{"min-height":"400px"}}>
            <div className="position-relative h-100">
            <iframe className="position-absolute w-100 h-100" style={{"object-fit":"cover"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
        </div>
        </div>
    </div>
    </div>
    {/* Contact End */}

    <Footer/>

     {/* <!-- Back to Top --> */}
     <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

    </>
  )
}
