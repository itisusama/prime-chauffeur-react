import React from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/frontend/assets/bootstrap/css/bootstrap.min.css';
import './assets/frontend/assets/css/style.css';
import './assets/frontend/assets/css/owl.carousel.min.css';
import Navbar from './components/Navbar';
import Home from './Home';

const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>

    <Helmet>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"/>
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    {/* Custom JS */}
    <script src="/assets//frontend/assets/purecounter/purecounter_vanilla.js"></script>
    <script src="/assets//frontend/assets/js/script.js"></script>
    <script src="/assets//frontend/assets/js/jquery-1.12.1.min.js"></script>
    <script src="/assets//frontend/assets/js/jquery-3.3.1.slim.min.js"></script>
    <script src="/assets//frontend/assets/js/owl.carousel.min.js"></script>

    {/* Odometer JS */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js"></script>
    </Helmet>
    </>
  )
}

export default App
