import React from 'react'

const CarCards = () => {
  return (
    <>
      <section className="mt-4 pc-carCardsSlider-mobile">
      <div className="title pt-3 d-flex justify-content-center mb-3">
        <h2 className="position-relative ms-4">Our Cars</h2>
      </div>
      <div className="container">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque animi quae vel doloribus magni adipisci explicabo, placeat quos quisquam a rerum alias totam suscipit ab consequatur possimus eius temporibus rem vero nisi tempore magnam voluptates? Dicta, earum.
        </p>
      </div>

      <div className="owl-carousel pc-owl-center container">
        {/* Car 1 */}
        <div className="item">
          {/* Card */}
          <div className="card" data-aos="fade-up" data-aos-delay="1000">
            <img className="card-img-top" src={'images/cars/car1.png'} alt="Card image" style={{ width: '100%' }} />
            {/* Price */}
            <div className="pc-carPriceBadge px-3 py-2"><span>From £200</span></div>
            {/* Price */}
            <div className="card-body">
              <h5 className="card-title">Mercedes S-Class</h5>
              <hr className="w-25 text-danger" />
              <p className="card-text">
                <span className="d-block"><i className="fa-solid fa-check"></i> 4 Passengers </span>
                <span className="d-block"><i className="fa-solid fa-check"></i> 2 Bags </span>
              </p>
              <div className="pc-newsletter-btn mt-4 mx-auto">
                <button className="btn" onClick={() => window.location.href='/fleet'}>Book Now</button>
              </div>
            </div>
          </div>
          {/* Card */}
        </div>
        {/* Car 2 */}
        <div className="item">
          {/* Card */}
          <div className="card" data-aos="fade-down" data-aos-delay="1000">
            <img className="card-img-top" src={'images/cars/car2.png'} alt="Card image" style={{ width: '100%' }} />
            {/* Price */}
            <div className="pc-carPriceBadge px-3 py-2"><span>From £200</span></div>
            {/* Price */}
            <div className="card-body">
              <h5 className="card-title">Mercedes V-Class</h5>
              <hr className="w-25 text-danger" />
              <p className="card-text">
                <span className="d-block"><i className="fa-solid fa-check"></i> 4 Passengers </span>
                <span className="d-block"><i className="fa-solid fa-check"></i> 2 Bags </span>
              </p>
              <div className="pc-newsletter-btn mt-4 mx-auto">
                <button className="btn" onClick={() => window.location.href='/fleet'}>Book Now</button>
              </div>
            </div>
          </div>
          {/* Card */}
        </div>
        {/* Car 3 */}
        <div className="item">
          {/* Card */}
          <div className="card" data-aos="fade-up" data-aos-delay="1000">
            <img className="card-img-top" src={'images/cars/car3.png'} alt="Card image" style={{ width: '100%' }} />
            {/* Price */}
            <div className="pc-carPriceBadge px-3 py-2"><span>From £200</span></div>
            {/* Price */}
            <div className="card-body">
              <h5 className="card-title">Mercedes E-Class</h5>
              <hr className="w-25 text-danger" />
              <p className="card-text">
                <span className="d-block"><i className="fa-solid fa-check"></i> 4 Passengers </span>
                <span className="d-block"><i className="fa-solid fa-check"></i> 2 Bags </span>
              </p>
              <div className="pc-newsletter-btn mt-4 mx-auto">
                <button className="btn" onClick={() => window.location.href='/fleet'}>Book Now</button>
              </div>
            </div>
          </div>
          {/* Card */}
        </div>
        {/* End */}
      </div>
    </section>
    </>
  )
}

export default CarCards
