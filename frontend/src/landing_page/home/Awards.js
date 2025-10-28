import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src="assets/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1 className="fs-3">Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
            <img src="assets/images/pressLogos.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
