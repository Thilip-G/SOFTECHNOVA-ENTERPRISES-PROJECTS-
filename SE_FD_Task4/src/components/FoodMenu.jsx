import React from "react";

const FoodMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Chicken Biriyani",
      price: "Rs.200",
      image: "https://themewagon.github.io/restoran/img/menu-1.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 2,
      name: "Chicken Biriyani",
      price: "Rs.200",
      image: "https://themewagon.github.io/restoran/img/menu-2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 3,
     name: "Chicken Biriyani",
      price: "Rs.200",
      image: "https://themewagon.github.io/restoran/img/menu-5.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 4,
      name: "Chicken Biriyani",
      price: "Rs.200",
      image: "https://themewagon.github.io/restoran/img/menu-8.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 5,
     name: "Chicken Biriyani",
      price: "Rs.200",
      image: "https://themewagon.github.io/restoran/img/menu-6.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 6,
      name: "Chicken Biriyani",
      price: "Rs.200",
      image: "https://themewagon.github.io/restoran/img/menu-3.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 7,
     name: "Chicken Biriyani",
      price: "Rs.200",
      image: "https://themewagon.github.io/restoran/img/menu-7.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 8,
      name: "Chicken Biriyani",
      price: "Rs.200",
      image: "https://themewagon.github.io/restoran/img/menu-4.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];

  return (
    <div className="container my-5">
      <h3 className="text-warning text-center">-- Food Menu --</h3>
      <h1 className="mb-4 text-center d-1 fw-bolder">Most Popular Items</h1>

      <div className="row">
        {menuItems.map((item) => (
          <div key={item.id} className="col-md-6 mb-4">
            <div className="d-flex shadow p-3 rounded bg-white">
              <img src={item.image} alt={item.name} className="img-fluid rounded" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <div className="ms-3 food-menu-content">
                <div className="d-md-flex align-items-center justify-content-between">
                  <h4>{item.name}</h4>
                  <h4 className="text-warning">{item.price}</h4>
                </div>
                <hr />
                <p className="text-muted mb-0 text-justify">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
