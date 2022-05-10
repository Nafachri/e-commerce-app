import React from "react";
import background from "../assets/bg.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src={background}
          className="card-img"
          alt="Background"
          height="850px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASONS ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT OUR NEW PRODUCTS!</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
