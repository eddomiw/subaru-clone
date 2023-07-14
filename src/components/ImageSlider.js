import React, { useState } from "react";
import { sliderData } from "./SliderData";
import { BsChevronCompactRight } from "react-icons/bs";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="relative flex justify-center align-center">
      <BsChevronCompactRight
        className="right-arrow absolute top-1/2 right-7 text-7xl text-white opacity-50 z-10 cursor-pointer select-none "
        onClick={nextSlide}
      />
      {sliderData.map((slides, index) => {
        return (
          <div className="" key={index}>
            {index === current ? (
              <img
                className="h-[502px] w-screen duration-500 bg-center bg-cover"
                src={slides.image}
                alt="subaru slide"
              />
            ) : null}
          </div>
        );
      })}
    </section>
  );
}
