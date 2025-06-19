import React from "react";
import "../App";
import Aboutinner from "../components/Aboutinner";
import TeamMembers from "../components/TeamMembers"

const About = () => {
    return (
        <div id="about" className="container py-5">
            <div className="bg-food p-5">
                <h1 className="text-center fs-1 fw-bolder text-white mb-5">About Us</h1>
            </div>
            <Aboutinner/>
            <TeamMembers/>
        </div>
    );
};

export default About;
