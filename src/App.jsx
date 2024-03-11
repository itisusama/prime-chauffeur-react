import React from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/frontend/assets/bootstrap/css/bootstrap.min.css';
import './assets/frontend/assets/css/style.css';
import './assets/frontend/assets/css/owl.carousel.min.css';
import Navbar from './components/Navbar';
import Home from './Home';
// import aos from 'aos';
// import 'aos/dist/aos.css';

const App = () => {
  // useEffect(() => {
  //   aos.init({ duration: 1000 });
  // }, []);
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </Helmet>
    </>
  )
}

export default App
