import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-5 p-5">
          <h1 className="fs-3 mb-3">Unbeatable pricing</h1>
          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">See pricing <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-7" style={{display:"flex", alignItems:"center"}}>
          <div className="row">
            <div className="col pricingBox">
              <img src="assets/images/pricing-eq.svg"/>
              <p className="pricingP">Free account opening</p>
            </div>
            <div className="col pricingBox">
              <img src="assets/images/pricing-eq.svg"/>
              <p className="pricingP">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col pricingBox">
              <img src="assets/images/other-trades.svg"/>
              <p className="pricingP" style={{left:"-6px"}}> Intraday, F&O and More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
