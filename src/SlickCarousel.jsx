import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";

function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {longList.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          return (
            <article key={id}>
              <img src={image} alt={title} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title"> {title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
      </Slider>
    </section>
  );
}

export default SlickCarousel;
