import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ options, index }) {
  return (
    <div className="row" style={{ marginBottom: "10px" }}>
      <Options props={options} key={index} />
    </div>
  );
}

const Options = ({ props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const stl = {
    backgroundColor: isHovered ? "blue" : "white",
    padding: "5px",
    color: isHovered ? "white" : "black",
    cursor: "pointer",
    textDecoration: "none" // Adicionado para remover sublinhado do link
  };

  return (
    <div data-bs-dismiss="offcanvas" aria-label="Close">
      <Link
        to={props.href} // Use o atributo "to" para definir a rota
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={stl}
      >
        {props.name}
      </Link>
    </div>
  );
};
