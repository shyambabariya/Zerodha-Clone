import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img
            src="assets/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p
            className="text-muted pt-2 ps-5 pe-5"
            style={{ fontSize: "0.8rem" }}
          >
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="assets/images/sensibull-logo.svg"
            style={{ width: "60%" }}
          />
          <p
            className="text-muted pt-2 ps-5 pe-5"
            style={{ fontSize: "0.8rem" }}
          >
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br /> data points like open
            interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="assets/images/tijori.svg" style={{ width: "40%" }} />
          <p
            className="text-muted pt-2 ps-5 pe-5"
            style={{ fontSize: "0.8rem" }}
          >
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="assets/images/streakLogo.png" style={{ width: "50%" }} />
          <p
            className="text-muted pt-2 ps-5 pe-5"
            style={{ fontSize: "0.8rem" }}
          >
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="assets/images/smallcaseLogo.png" style={{ width: "50%" }} />
          <p
            className="text-muted pt-2 ps-5 pe-5"
            style={{ fontSize: "0.8rem" }}
          >
            Thematic investing platform <br /> that helps you invest in
            diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="assets/images/dittoLogo.png" style={{ width: "40%" }} />
          <p
            className="text-muted  pt-2 ps-5 pe-5"
            style={{ fontSize: "0.8rem" }}
          >
            Personalized advice on life <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
         <button className="btns p-2 mt-4 mb-5 fs-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
