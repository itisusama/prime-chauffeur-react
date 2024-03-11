import React from 'react'

const Hero = () => {
  return (
    <>
       <section className="pc-hero">
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div className="col-lg-6 pc-hero-heading" data-aos="fade-right" data-aos-delay="1000">
            <p className="text-white h1">Website Heading</p>
            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ab velit explicabo adipisci harum eum vitae quae nostrum tenetur libero, consequatur voluptatibus?</p>
          </div>
          {/* Form */}
          <div className="col-lg-6 pc-hero-form" data-aos="fade-left" data-aos-delay="1000">
            {/* Form div */}
            <div className="py-2">
              {/* btns */}
              <div className="pc-hero-form-btns py-2 d-flex gap-1 justify-content-center">
                <h1>Get Quick Quote</h1>
              </div>
              {/* btns */}
              {/* 1 */}
              <section className="px-5" id="pc-oneway-form" style={{ display: 'block' }}>
                <form action="#" method="post">
                  {/* @csrf - Replace this with your React form handling logic */}
                  <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Pickup Location" required />
                  </div>

                  <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Destination" required />
                  </div>
                  <hr />
                  {/* Date and Time */}
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="onewaycheck" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        One Way
                      </label>
                    </div>
                    {/* Row */}
                    <div className="row">
                      {/* Time */}
                      <div className="col-md-8 mb-3">
                        <div className="input-group date" id="datepicker">
                          <input type="date" className="form-control" id="onewaybookingdate" />
                        </div>
                      </div>
                      {/* Time */}
                      <div className="col-md-4 mb-3">
                        <div className="input-group date" id="datepicker">
                          <input type="time" className="form-control" id="onewaybookingtime" />
                        </div>
                      </div>
                      {/* End */}
                    </div>
                    {/* Row */}
                  </div>
                  {/* Date and Time */}
                  {/* Date and Time */}
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="returncheck" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Return
                      </label>
                    </div>
                    {/* Row */}
                    <div className="row">
                      {/* Time */}
                      <div className="col-md-8 mb-3">
                        <div className="input-group date" id="datepicker">
                          <input type="date" className="form-control" id="returnbookingdate" />
                        </div>
                      </div>
                      {/* Time */}
                      <div className="col-md-4 mb-3">
                        <div className="input-group date" id="datepicker">
                          <input type="time" className="form-control" id="returnbookingtime" />
                        </div>
                      </div>
                      {/* End */}
                    </div>
                    {/* Row */}
                  </div>
                  {/* Date and Time */}
                  <div className="pc-hero-submit-btn d-flex justify-content-center" style={{ cursor: 'pointer' }} onClick={() => window.location.href='/booking'}>
                    <button className="btn" onClick={() => window.location.href='/booking'}> Book Now </button>
                  </div>
                </form>
              </section>
              {/* END */}
            </div>
            {/* Form div */}
          </div>
          {/* End */}
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero