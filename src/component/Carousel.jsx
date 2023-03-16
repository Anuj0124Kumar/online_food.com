import React from "react";

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousal">
          <div class="carousel-caption d-none d-md-block" style={{zIndex:"2"}}>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success " type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg"
              className="d-block w-100"
              alt="..."
              style={{filter:"brightness(30%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPsN3_994oxyGQP2IoipLevrlptkIYq0IPJBNBZoqT0xfIIUrGEhZnfSjaq_5JR72FWg&usqp=CAU"
              className="d-block w-100"
              alt="..."
              style={{filter:"brightness(30%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/516401834/photo/authentic-chicken-biryani-with-onion-raita.jpg?s=612x612&w=0&k=20&c=wxB5KbJAMsnph4CscPjAUSYJjymFqeJ9eGc0ATfgLyE="
              className="d-block w-100"
              alt="..."
              style={{filter:"brightness(30%)"}}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
