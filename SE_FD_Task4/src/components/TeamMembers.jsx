import React from "react";
import "../App"; 

const TeamMembers = () => {
  const Members = [
    {
      id: 1,
      Name: "Chef Damu",
      Profile: "https://www.behindwoods.com/uploads/6186ba2e8e476.jpg",
      Designation: "Master Chef - Non Veg",
      instaid: "https://instagram.com/demo",
      facebookid: "https://facebook.com/demo"
    },
    {
      id: 2,
      Name: "Chef Venkatesh Bhatt",
      Profile: "https://wikibio.in/wp-content/uploads/2021/06/Venkatesh-Bhat.jpg",
      Designation: "Master Chef - Veg",
      instaid: "https://instagram.com/demo",
      facebookid: "https://facebook.com/demo"
    },
    {
      id: 3,
      Name: "Chef Rangarajan",
      Profile: "https://nettv4u.com/serialimages/25-01-2019/madhampatty-rangaraj.jpg",
      Designation: "Chef - Non Veg",
      instaid: "https://instagram.com/demo",
      facebookid: "https://facebook.com/demo"
    },
    {
      id: 4,
      Name: "Chef Kaushik",
      Profile: "https://tse1.mm.bing.net/th/id/OIP.U402XD54uOa_zj9zZbFWiQAAAA?rs=1&pid=ImgDetMain",
      Designation: "Chef - Non Veg",
      instaid: "https://instagram.com/demo",
      facebookid: "https://facebook.com/demo"
    }
  ];

  return (
    <div className="container my-5">
      <h3 className="text-warning text-center">--Team Members--</h3>
      <h1 className="text-center mb-4">Our Master Chefs</h1>
      <div className="row">
        {Members.map((items) => (
          <div key={items.id} className="col-md-3 mb-4">
            <div className="card team-card position-relative overflow-hidden h-100">
              <img
                src={items.Profile}
                className="card-img-top fixed-img"
                alt={items.Name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{items.Name}</h5>
                <p className="card-text text-muted">{items.Designation}</p>
              </div>
              <div className="social-overlay d-flex justify-content-center align-items-center gap-4">
                <a href={items.facebookid} target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f text-white fs-4"></i>
                </a>
                <a href={items.instaid} target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram text-white fs-4"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
