import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ options }) {
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
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      to={options.href} // Use o atributo "to" para definir a rota
      style={stl}
    >
      {options.name}
    </Link>
  );
}
