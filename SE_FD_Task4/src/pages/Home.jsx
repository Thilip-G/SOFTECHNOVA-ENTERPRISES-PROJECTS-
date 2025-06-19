import React from "react";
import SmallAbout from '../components/SmallAbout.jsx'
import TeamMembers from '../components/TeamMembers.jsx'
import Aboutinner from '../components/Aboutinner.jsx'
import FoodMenu from '../components/FoodMenu.jsx'
import '../App.css'

const Home = () => {
  return (
    <section id="hero" className="py-5">
      <div className="container">
        <div className="row align-items-center p-5 mt-0 mb-5 bg-food">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">Looking for the Best Restaurant?</h1>
            <p className="lead mb-5 text-justify">
              Discover delightful dishes, cozy ambiance, and top-notch service all in one place. 
              Whether you're craving something spicy, sweet, or savory, we've got you covered!
            </p>
            <a href="#book" className="bg-warning p-3 fw-bold text-decoration-none text-black rounded">Book a Table</a>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://themewagon.github.io/restoran/img/hero.png"
              alt="Restaurant Hero"
              className="img-fluid rounded demo-img"
              style={{
                objectFit: "cover"
              }}
            />
          </div>

        </div>
        <SmallAbout/>
        <Aboutinner/>
        <FoodMenu/>
        <TeamMembers/>
      </div>
    </section>
  );
};

export default Home;
