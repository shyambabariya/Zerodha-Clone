import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">People</h2>
      </div>
      <div className="row text-muted fs-6" style={{ lineHeight: "2rem" }}>
        <div className="col-6 p-5 text-center">
          <img
            src="assets/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
