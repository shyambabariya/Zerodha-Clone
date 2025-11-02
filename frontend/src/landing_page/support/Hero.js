import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

function Hero() {
  return (
    <header style={{backgroundColor:"#F0F0F0"}}>
      <div className="container p-5">
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <h2>Support Portal</h2>
        <button className="ticketBtn">My ticket</button>
        </div>
        <form>
          <input
            className="mt-3 p-2"
            style={{ width: "100%", height:"3.5rem", fontSize: "1rem", border: "none" }}
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </form>
      </div>
    </header>
  );
}

export default Hero;
