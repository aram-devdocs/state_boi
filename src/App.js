import "./App.css";
import { Slideshow } from "./components/Slideshow";
import { Modal } from "./components/Modal";
import { useState, useEffect } from "react";
function App() {
  // states
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };


  useEffect(() => {
    return () => {
      setShowModal(false)
    }
  }, [])



  return (
    <>
      <Slideshow
        toggleModal={toggleModal}
        slides={[
          {
            // Index 0
            // imageUrl: "https://picsum.photos/seed/picsum/200/300",
            // captionText: "Slide 1",
            buttonText: "Click me",
          },
          {
            // Index 1
            imageUrl: "https://picsum.photos/seed/picsum/200/300",
            captionText: "Slide 2",
            buttonText: "Click me",
          },
          {
            // Index 2
            imageUrl: "https://picsum.photos/seed/picsum/200/300",
            captionText: "3",
            buttonText: "Click me",
          },
        ]}
      />
      <Modal toggleModal={toggleModal} showModal={showModal} />
    </>
  );
}

export default App;
