import { useState } from "react";

export const Slideshow = ({ slides, toggleModal }) => {
  // states
  const [slideIndex, setSlideIndex] = useState(0);

  // consts
  const currentSlide = slides[slideIndex];
  const imageUrl = currentSlide?.imageUrl || null;
  const captionText = currentSlide?.captionText || null;
  const buttonText = currentSlide?.buttonText || null;

  // handlers
  const handleNext = () => {
    if (slideIndex === slides.length - 1) {
      // this is the end of the slide show, start it over
      setSlideIndex(0);
      return;
    }

    setSlideIndex(slideIndex + 1);
  };

  return (
    <div>
      {imageUrl && (
        <img
          style={{
            // debug border
            border: "1px solid red",
            width: 600,
            height: 300,
          }}
          src={imageUrl}
          alt="slide"
        />
      )}
      <p>{captionText}</p>
      <button onClick={handleNext}>{buttonText}</button>
      <button onClick={toggleModal}>Toggle</button>
    </div>
  );
};
