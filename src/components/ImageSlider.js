import React, { useState } from "react";
import { sliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function ImageSlider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0: current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="relative flex justify-center align-center">
      <FaArrowAltCircleLeft
        className="left-arrow absolute top-1/2 left-7 text-5xl z-10 cursor-pointer select-none"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="right-arrow absolute top-1/2 right-7 text-5xl z-10 cursor-pointer select-none"
        onClick={nextSlide}
      />
      {sliderData.map((slides, index) => {
        return (
          <div className="" key={index}>
            {index === current && (
              <img
                className="h-96 w-50 "
                src={slides.image}
                alt="subaru slide"
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
