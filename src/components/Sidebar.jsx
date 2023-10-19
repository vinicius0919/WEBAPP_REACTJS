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
    <div className="col">
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to={props.href} // Use o atributo "to" para definir a rota
        style={stl}
      >
        {props.name}
      </Link>
      {false && (
        <div className="collapse" id={props.index}>
          <div className="card card-body">Opção 1 Oção 2</div>
        </div>
      )}
    </div>
  );
};
