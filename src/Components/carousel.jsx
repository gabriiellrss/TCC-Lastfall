import React from "react";
import "/src/styles/carousel.css";


const slides = [
  {
    image: "https://via.placeholder.com/800x400?text=Unreal+Engine",
    text: "UNREAL ENGINE",
  },
  {
    image: "https://via.placeholder.com/800x400?text=Fortnite",
    text: "FORTNITE",
  },
  {
    image: "https://via.placeholder.com/800x400?text=Rocket+League",
    text: "ROCKET LEAGUE",
  },
  {
    image: "https://via.placeholder.com/800x400?text=Store",
    text: "STORE",
  },
];

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {/* Duplica as imagens para efeito contínuo */}
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

