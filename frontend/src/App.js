import React from 'react';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Home from './Home';
import AboutPage from './AboutPage';
import ServicePage from './ServicePage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/about" element={<AboutPage/>}></Route> 
          <Route path="/service" element={<ServicePage/>}></Route> 
          <Route path="/project" element={<ProjectPage/>}></Route> 
          <Route path="/contact" element={<ContactPage/>}></Route> 
          {/* <Route path="/login" element={<LoginPage/>}></Route>  */}
          {/* <Route path="/signup" element={<SignUpPage/>}></Route>  */}

  
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
