import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <h3>Charges</h3>
        <h4 className="text-muted mt-3">List of all charges and taxes</h4>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-4 p-4">
          <img src="assets/images/pricingEquity.svg" />
          <h2>Free equity delivery</h2>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE),
         are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="assets/images/intradayTrades.svg" />
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity
            trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="assets/images/pricingEquity.svg" />
          <h2>Free direct MF</h2>
          <p className="text-muted mt-4">
            All direct mutual fund investments are <br/> absolutely free — ₹ 0
            commissions & DP <br/> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
