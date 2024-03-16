import Carousel from 'react-bootstrap/Carousel';

const carCardsData = [
  { rent: '200', carName: 'Mercedes',pessengers:'5',bags:'4'  },
  { rent: '200', carName: 'Civic Honda',pessengers:'3',bags:'4'  },
  { rent: '200', carName: 'Parado',pessengers:'6',bags:'6'  },
  { rent: '200', carName: 'Mercedes',pessengers:'5',bags:'4'  },
  // Add more props objects as needed
];
function CarouselSmallScreen() {
  return (
    <Carousel>
      <Carousel.Item>
      <CarCards index={1} rent={ carCardsData[0][0]} carName={carCardsData[0][1]} pessengers={carCardsData[0][2]} bags={carCardsData[0][3]}/>
        
      </Carousel.Item>
      <Carousel.Item>
      <CarCards index={2} rent={carCardsData[1][0]} carName={carCardsData[1][1]} pessengers={carCardsData[1][2]} bags={carCardsData[1][3]}/>
        
      </Carousel.Item>
      <Carousel.Item>
      <CarCards index={3} rent={carCardsData[2][0]} carName={carCardsData[2][1]} pessengers={carCardsData[2][2]} bags={carCardsData[2][3]}/>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSmallScreen;

const CarCards = ({index,rent,carName,pessengers,bags}) => {
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
          
            <div className="item" key={index}>
              {/* Card */}
              <div className="card" data-aos="fade-up" data-aos-delay="1000">
                <img className="card-img-top" src={'images/cars/car1.png'} alt="Card image" style={{ width: '100%' }} />
                {/* Price */}
                <div className="pc-carPriceBadge px-3 py-2"><span>From £{rent}</span></div>
                {/* Price */}
                <div className="card-body">
                  <h5 className="card-title">{carName}</h5>
                  <hr className="w-25 text-danger" />
                  <p className="card-text">
                    <span className="d-block"><i className="fa-solid fa-check"></i> {pessengers} Passengers </span>
                    <span className="d-block"><i className="fa-solid fa-check"></i> {bags} Bags </span>
                  </p>
                  <div className="pc-newsletter-btn mt-4 mx-auto">
                    <button className="btn" onClick={() => redirectToFleet()}>Book Now</button>
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
        
        </div>
      </section>
    </>
  );
}

// Function to handle redirection to the fleet page
const redirectToFleet = () => {
  window.location.href = '/fleet';
}