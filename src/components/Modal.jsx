import { useState, useEffect } from "react";

export const Modal = ({ toggleModal, showModal }) => {
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
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};
