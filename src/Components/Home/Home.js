import React from "react";
import { Link } from "react-router-dom";

import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <>
    <div className="container">
      {/* <div> */}
        <div>
          <h1>
            <span className="coding-master">Coding Master Laptop</span>
            <br />
            <span className="smooth">Smooth For Coding</span>
          </h1>
          <p className="laptop-title" >
            We review the best laptop for you so that <br />
             you can code easily by
            this laptop. 
             Our recommended products have been praised by all.
          </p>
        </div>
        <div>
          <img
            className="Image"
            src="https://url-enamul.netlify.app/images/laptop7.jpg"
            alt="a Laptop"
          />
        </div>
     
    
    </div>


      <div>
        <h1 className="Customers">Customers Review</h1>
        <Reviews></Reviews>
        <Link className="see-all" to="/review">See All Reviews</Link>
      </div>
   </>
  );
};

export default Home;
