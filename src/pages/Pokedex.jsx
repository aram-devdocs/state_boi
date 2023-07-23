import { Modal } from "../components/Modal";
import { Slideshow } from "../components/Slideshow";
import { useModal } from "../hooks/useModal";
import { useSlides } from "../hooks/useSlides";

export const Pokedex = () => {
  // states
  const { showModal, toggleModal } = useModal();
  const { slides, currentSlide, slideIndex, setSlideIndex } = useSlides();

  return (
    <>
      {(slides.length && (
        <Slideshow
          slides={slides}
          toggleModal={toggleModal}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />
      )) || <p>Loading...</p>}
      <Modal
        toggleModal={toggleModal}
        showModal={showModal}
        currentSlide={currentSlide}
      />
    </>
  );
};
