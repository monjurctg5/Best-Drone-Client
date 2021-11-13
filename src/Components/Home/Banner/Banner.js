import React from 'react';
let img1 = "http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_06-1200x640.png"

let img2 = "http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_04-640x384.png"
let img3 = "https://m.media-amazon.com/images/I/51GLPOyhn0L.jpg"
const Banner = () => {
  return (
    <div className="">

    <div  className="mt-5 pb-5">
      <h6>AERIAL PHOTOGRAPHY</h6>
      <h1 className="text-secondary">There Are Many <span className="text-dark"> Great Ways</span> <br />
        To Use Drones</h1>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide pb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1}  style={{height:"300px",width:"300px"}} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} style={{height:"300px",width:"300px"}} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item ">
            <img src={img3}  style={{height:"400px",width:"300px"}} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;