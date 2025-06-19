import React from "react";
import '../App'
import SmallAbout from "../components/SmallAbout";

const Service = () => {
    return (
        <div className="container my-5">
            <div className="bg-food p-5 my-5">
                <h1 className="text-center fs-1 fw-bolder text-white mb-5">Services</h1>
            </div>
            <h3 className="text-warning text-center">--Our Services--</h3>
            <h1 className="fw-bolder d-1 text-center">Explore Our Services</h1>
            <SmallAbout />
            <SmallAbout />       
        </div>
    );
};

export default Service;
