import React from 'react';
import CarDescription from './components/CarDescription';
import Banner from './components/Banner';
import Whyus from './components/Whyus';
import Icons from './components/Icons';
function AirportService() {

  return (
    <>
      {/* Banner */}
      {/* You need to implement the Banner component separately */}
      <Banner
      pageTitle="Service"
      bannerText="Incididunt ut laboret dolore magna aliqua enim minim veniam nostrud ullamco laboris nisi aliquip ex loea."
      breadcrumb="Service"
      showCarsBreadcrumb={false}
      />
      {/* Service Top component */}
      <div className="jumbotron jumbotron-fluid feature" id="feature-first">
        <div className="container my-5">
            <div className="row justify-content-between text-center text-md-left">
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="col-md-6">
                <h2 className="font-weight-bold">Take a look inside</h2>
                <p className="my-4">Te iisque labitur eos, nec sale argumentum scribentur no,<br />augue disputando in vim. Erat fugit sit at, ius lorem deserunt deterruisset no.</p>
                <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-blue" onClick={() => window.location.href='/fleet'}>Learn More</a>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="col-md-6 align-self-center">
                <img src={'images/cars/car2.png'} alt="Take a look inside" className="mx-auto d-block" />
            </div>
            </div>
        </div>
        </div>

              
      {/* Main content */}
      <main id="main">
        {/* About Section */}
        <section id="about">
          <div className="container" data-aos="fade-up">
            
            <Icons/>
            {/* Additional Content */}
            {/* You need to implement the additional content separately */}
            <CarDescription orderText={2}/>
            <CarDescription orderText={1}/>
          </div>
        </section>
        {/* End About Section */}

        {/* Why Us Component */}
        {/* You need to implement the WhyUs component separately */}
        <Whyus/>
      </main>
      {/* End #main */}
    </>
  );
}

export default AirportService;