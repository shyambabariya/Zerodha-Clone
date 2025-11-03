import React from 'react'

function RightSection({imageURL,productName, productDescription,learnMore}) {
    return ( 
        <div className="container">
      <div className="row p-5">
        <div className="col-5 mt-5">
          <h2 className="mt-5">{productName}</h2>
          <p className="pe-5 mt-3">{productDescription}</p>
          <div className="mt-3">
          <a href={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="col-7">
          <img src={imageURL} style={{width:"90%"}}/>
        </div>
      </div>
    </div>
     );
}

export default RightSection;