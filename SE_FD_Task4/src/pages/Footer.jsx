import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h4 className="text-warning">SE Restaurant</h4>
                        <ul className="list-unstyled mt-3">
                            <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h4 className="text-warning">Contact</h4>
                        <p className="mt-3">
                            123 Street, Chennai, India<br />
                            Phone: +91 98765 43210<br />
                            Email: info@serestaurant.com
                        </p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h4 className="text-warning">Opening Hours</h4>
                        <div className="mt-3">
                            <p className="mb-1">Monday - Saturday</p>
                            <small>09:00 AM - 09:00 PM</small>
                        </div>
                        <div className="mt-2">
                            <p className="mb-1">Sunday</p>
                            <small>10:00 AM - 04:00 PM</small>
                        </div>
                    </div>
                </div>

                <hr className="bg-light" />
                <p className="text-center mb-0">&copy; {new Date().getFullYear()} All rights reserved by <strong>Thilip G</strong></p>
            </div>
        </footer>
    );
};

export default Footer;
