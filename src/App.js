import "./styles.css";
import { useState } from "react";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

  function handleNext() {
    return setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }
  function handlePrevious() {
    return setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }

  return (
    <div className="slide-container">
      <div
        className="slider"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {slides.map((item, i) => (
          <div
            className="slide"
            style={{
              display: "inline",
            }}
            key={i}
          >
            {item}{" "}
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevious} style={{ marginRight: "10px" }}>
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
