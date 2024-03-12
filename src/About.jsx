import React from 'react'
import Banner from './components/Banner'
import Counter from './components/Counter'
import Homebanner from './components/Homebanner'

const About = () => {
  return (
    <>
      <Banner
      pageTitle="About Us"
      bannerText="Incididunt ut laboret dolore magna aliqua enim minim veniam nostrud ullamco laboris nisi aliquip ex loea."
      breadcrumb="About"
      showCarsBreadcrumb={false}
      contactNumber="your_contact_number"
    />
    {/* <!-- START:: image and info --> */}
    <section className="container mt-4 mb-4">
        <div className="row">
            {/* <!-- map Image --> */}
            <div className="col-lg-6 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="1000">
                <img src={'images/cars/locations-map.png'} className="img-fluid" alt="map"/>
            </div>
            {/* <!-- information --> */}
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="1000">
                <h3>About Company</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sit distinctio consequatur minima, nobis quibusdam perspiciatis maxime aspernatur blanditiis nam voluptate soluta quo possimus quas fugit laudantium, expedita facilis impedit. Harum aliquam at assumenda enim eveniet nisi iusto voluptas!</p>
                <div className="pc-newsletter-btn mt-4">
                   <button className="btn">Hire a Car</button>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- END:: image and info --> */}
    <Counter/>
    <Homebanner/>
    
    </>
  )
}

export default About
