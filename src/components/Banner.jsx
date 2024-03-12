import React from 'react';

const Banner = ({ pageTitle, bannerText, breadcrumb, showCarsBreadcrumb, contactNumber, callUsButtonText }) => {
  return (
    <section className="pc-contact-banner py-3">
      <div className="container mt-3" data-aos="fade-right" data-aos-delay="1000">
        <h1 className="text-red">{pageTitle}</h1>
        <div className="text-white w-50">
          <p>{bannerText}</p>
        </div>
        {/* Bread Crumb */}
        <div className="pc-banner-breadcrumb">
          <p className="text-white">
            <a href="/">Home</a>
            {showCarsBreadcrumb && <span> &gt; <a href="/fleet">Cars</a></span>}
            &gt; {breadcrumb}
          </p>
        </div>
        {/* Bread Crumb */}
        {/* Call Us Button */}
        {contactNumber && callUsButtonText && (
          <div className="pc-contactus-btn px-4">
            <a href={`tel:${contactNumber}`} className="btn text-white">{callUsButtonText}</a>
          </div>
        )}
        {/* Call Us Button */}
      </div>
    </section>
  );
};

export default Banner;
