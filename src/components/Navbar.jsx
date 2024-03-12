import React, { useState } from 'react'

const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <section className="pc-navbar container-fluid px-0">
        <nav className="pc-desktop-navbar bg-body-tertiary px-5 py-2 d-flex justify-content-between">
          {/* LOGO and Name */}
          <div className="pc-navbar-mobile-logo">
            <div className="pc-navbar-logo p-2" onClick={() => window.location.href = '/home'}>
              <i className="fa-solid fa-car"></i>
            </div>
            <div className="pc-navbar-name" onClick={() => window.location.href = '/home'}>
              <h5>Prime Chauffeur</h5>
            </div>
          </div>
          {/* Items */}
          <div className="pc-navbar-list">
            <ul className="list-unstyled d-flex gap-1 align-items-center">
              <li><b><a href="/home">Home</a></b></li>
              <li><a href="/fleet" style={{ margin: '0 10px' }}>Our Fleet</a></li>
              <li>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/airport">Airport Transfers</a></li>
                    <li><a className="dropdown-item" href="/wedding">Wedding</a></li>
                    <li><a className="dropdown-item" href="/events">Events</a></li>
                    <li><a className="dropdown-item" href="/business">Business</a></li>
                    <li><a className="dropdown-item" href="/tours">Tours</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blog
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/singleblog">Single Blog</a></li>
                    <li><a className="dropdown-item" href="/blog">All Blogs</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="/contact" style={{ marginRight: '10px' }}>Contact</a></li>
              <li><a href="/about" style={{ marginRight: '10px' }}>About</a></li>
              <li><button type="button" className="pc-navbar-booknow px-3" onClick={() => window.location.href = '/cars.html'}>Book Now</button></li>
            </ul>
          </div>
        </nav>
        <div className="pc-navbar-mobile-toggle">
          <a href="#" id="pc-navbar-mobile-toggle" onClick={toggleMobileNav}>
            <i className="fa-solid fa-bars fa-2xl"></i>
          </a>
        </div>
      </section>

      {/* Mobile Navbar */}
      <section className={`pc-mobile-navbar bg-light ${mobileNavActive ? 'navbar-active' : ''}`} id="pc-mobile-navbar">
        {/* close */}
        <div className="pc-mobile-navbar-close" id="pc-mobile-navbar-close" onClick={closeMobileNav}>
          <i className="fa-solid fa-x"></i>
        </div>

        <div className="container pc-mobile-list">
          <ul className="list-unstyled">
            <li><b><a className="btn" href="/home">Home</a></b></li>
            <li>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cars
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/cars.html">Our Cars</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/airport">Airport Transfers</a></li>
                  <li><a className="dropdown-item" href="/wedding">Wedding</a></li>
                  <li><a className="dropdown-item" href="/events">Events</a></li>
                  <li><a className="dropdown-item" href="/business">Business</a></li>
                  <li><a className="dropdown-item" href="/tours">Tours</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/blog">All Blogs</a></li>
                  <li><a className="dropdown-item" href="/singleblog">Single Blog</a></li>
                </ul>
              </div>
            </li>
            <li><a className="btn" href="/contact" style={{ marginRight: '10px' }}>Contact</a></li>
            <li><a className="btn" href="/home" style={{ marginRight: '10px' }}>About</a></li>
            <li><button type="button" className="pc-navbar-booknow px-3" onClick={() => window.location.href = '/cars.html'}>Book Now</button></li>
          </ul>
        </div>
      </section>
      {/* END:: Navbar */}
    </>
  )
}

export default Navbar
