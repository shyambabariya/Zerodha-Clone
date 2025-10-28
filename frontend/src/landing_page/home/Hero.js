import React from "react";

function Hero() {
  return (
    <div className="container" style={{marginTop:"6rem"}}>
      <div className="row text-center p-5">
        <img src="assets/images/landing.svg" alt="Hero Image" className="mb-5" style={{width:"60%",margin:"auto"}} />
        <h1 className="mt-2 fs-3">Invest in everything</h1>
        <p className="fs-5 text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="btns p-2 mt-4 fs-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Hero;
