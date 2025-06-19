import React from "react";
import '../App'

const SmallAbout = () => {
    return (
        <div className="row text-center">

            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100 custom-shadow">
                    <div className="card-body">
                        <i className="fa-solid fa-user fa-2x mb-3 text-primary"></i>
                        <h3 className="card-title">Master Chefs</h3>
                        <p className="card-text text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem nisi magni, fugiat assumenda voluptates.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100 custom-shadow">
                    <div className="card-body">
                        <i className="fa-solid fa-utensils fa-2x mb-3 text-success"></i>
                        <h3 className="card-title">Quality Food</h3>
                        <p className="card-text text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem nisi magni, fugiat assumenda voluptates.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100 custom-shadow">
                    <div className="card-body">
                        <i className="fa-solid fa-cart-shopping fa-2x mb-3 text-warning"></i>
                        <h3 className="card-title">Online Order</h3>
                        <p className="card-text text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem nisi magni, fugiat assumenda voluptates.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100 custom-shadow">
                    <div className="card-body">
                        <i className="fa-solid fa-phone-volume fa-2x mb-3 text-danger"></i>
                        <h3 className="card-title">24/7 Service</h3>
                        <p className="card-text text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem nisi magni, fugiat assumenda voluptates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallAbout;
