import React from "react";
import "/src/styles/carousel.css";


const slides = [
  {
    image: "public/images/undefined_image (1).png",
    text: "City",
  },
  {
    image: "public/images/Gabriel_Rodrigo_Create_a_scientist_character._with_the_features_of_40103c8a-d9ad-4e5d-8fa7-0954cbb06955.png",
    text: "Cleber",
  },
  {
    image: "public/images/Domuscad_Create_a_bald_character._with_the_features_of_an_a_3fb39a8e-06f7-4ef5-a62e-053ca2c9bd30.png",
    text: "Heltons",
  },
  {
    image: "public/images/undefined_image (7).png",
    text: "Lab umbrela",
  },
];

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {slides.concat(slides).map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.image} alt={slide.text} />
            <div className="carousel-text">{slide.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

