import React from "react";

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-7 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-5 mt-5">
          <h2 className="mt-5">{productName}</h2>
          <p className="pe-5 mt-3">{productDescription}</p>
          <div className="mt-3">
          <a href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
          <a className="p-5" href={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="mt-4">
          <a href={googlePlay}><img src="assets/images/googlePlayBadge.svg"/></a>
          <a className="p-3" href={appStore}><img src="assets/images/appstoreBadge.svg"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
