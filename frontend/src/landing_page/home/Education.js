import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6">
          <img
            src="assets/images/education.svg"
            style={{ width: "80%"}}
          />
        </div>
        <div className="col-6 mt-5" style={{paddingRight:"5rem"}}>
          <h1 className="fs-3">Free and open market education</h1>
          <p className="text-muted mb-3 mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#">
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="text-muted mb-3 mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="mb-5" href="#">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
