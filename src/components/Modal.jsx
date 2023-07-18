import axios from "axios";
import { useState, useEffect } from "react";

export const Modal = ({ toggleModal, showModal, currentSlide }) => {
  const [description, setDescription] = useState({});
  const descriptionUrl = currentSlide?.descriptionUrl || null;

  useEffect(() => {
    if (descriptionUrl && showModal) {
      axios
        .get(descriptionUrl)
        .then((response) => {
          setDescription(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentSlide, showModal]);

  useEffect(() => {
    return () => {
      setDescription({});
    };
  }, [showModal]);

  const PokemonDescription = () => {
    if (!description) {
      return <p>Loading...</p>;
    }
    // show data that would come from example endpoint: https://pokeapi.co/api/v2/pokemon/1/
    return (
      <>
        <p>Name: {description.name}</p>
        <p>Height: {description.height}</p>
        <p>Weight: {description.weight}</p>
        <p>Base Experience: {description.base_experience}</p>
      </>
    );
  };

  const modalStyleObject = {
    display: showModal ? "flex" : "none",
    // style and put in center of screen
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    // background color with opacity
    backgroundColor: "rgba(0,0,0,0.4)",
    // center content
    justifyContent: "center",
    alignItems: "center",
  };
  // view
  return (
    <div style={modalStyleObject}>
      <div
        style={{
          backgroundColor: "#fefefe",
        }}
      >
        <span onClick={toggleModal}>&times;</span>
        <PokemonDescription />
      </div>
    </div>
  );
};
