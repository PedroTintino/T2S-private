import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 7,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="slider-container py-8 w-[70%]">
      <Slider {...settings} >
        <div className="card ">
          <img src="/client.png" alt="A client example image" height={100} width={100} className="rounded-lg"/>
        </div>
        <div className="card ">
          <img src="/client.png" alt="A client example image" height={100} width={100} className="rounded-lg"/>
        </div>
        <div className="card ">
          <img src="/client.png" alt="A client example image" height={100} width={100} className="rounded-lg"/>
        </div>
        <div className="card ">
          <img src="/client.png" alt="A client example image" height={100} width={100} className="rounded-lg"/>
        </div>
        <div className="card ">
          <img src="/client.png" alt="A client example image" height={100} width={100} className="rounded-lg"/>
        </div>
        <div className="card ">
          <img src="/client.png" alt="A client example image" height={100} width={100} className="rounded-lg"/>
        </div>
        <div className="card ">
          <img src="/client.png" alt="A client example image" height={100} width={100} className="rounded-lg"/>
        </div>
        <div className="card ">
          <img src="/client.png" alt="A client example image" height={100} width={100} className="rounded-lg"/>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
