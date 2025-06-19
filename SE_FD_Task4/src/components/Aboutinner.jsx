const Aboutinner=()=>{
    return(
        <div className="row  d-flex justify-content-around align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="img-container mx-auto">
                        <img src="https://themewagon.github.io/restoran/img/about-1.jpg" alt="img-1" className="img1" />
                        <img src="https://themewagon.github.io/restoran/img/about-2.jpg" alt="img-2" className="img2" />
                        <img src="https://themewagon.github.io/restoran/img/about-3.jpg" alt="img-3" className="img3" />
                        <img src="https://themewagon.github.io/restoran/img/about-4.jpg" alt="img-4" className="img4" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="text-warning">--About Us--</h3>
                    <h2 className="mb-4">Welcome to SE Restaurants</h2>
                    <p className="mb-4 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptas tempora saepe suscipit ratione similique, quam sequi libero! 
                        Odit deserunt facilis magnam adipisci aut, cum est incidunt illum beatae eaque?
                    </p>

                    <div className="d-flex justify-content-between mb-4">
                        <div className="text-center me-3">
                            <h2 className="fw-bold m-0">15</h2>
                            <h5 className="m-0">Years of <span className="text-warning">Experience</span></h5>
                        </div>
                        <div className="text-center ms-3">
                            <h2 className="fw-bold m-0">50</h2>
                            <h5 className="m-0">Popular <span className="text-warning">Master Chefs</span></h5>
                        </div>
                    </div>

                    <a 
                        href="#" 
                        className="btn btn-warning fw-bold px-4 py-2 rounded text-decoration-none text-black"
                    >
                        Read More
                    </a>
                </div>
            </div>
    );
}

export default Aboutinner;