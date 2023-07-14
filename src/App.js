import React from "react";
import Navigation from "./components/Navigation";
import ImageSlider from "./components/ImageSlider";
import { sliderData } from "./components/SliderData";

function App() {
  return (
    <div className="App">
      <Navigation />
      <ImageSlider slides={sliderData} />
    </div>
  );
}

export default App;
