import React, { useState, useContext } from "react";
import "../styles/Login.css";
import {Outlet } from "react-router-dom";
import B2logo from "../assets/logo b2 (1).png"


const LoginPage = ({element}) => {


  const TextOne = ({element}) => {
    return (
      <h4 >Negocie <span  id="gratis">{element} </span>com todos os fornecedores ao mesmo <br /> tempo, de forma inteligente</h4>
    )
  }

  return (
    <div className="conteiner">
      <div className="circle"></div>
      <div className="row justify-content-evenly">
        <div className="col-auto" style={{ marginTop: "30px"}}>
        <img src={B2logo} alt="logoB2" ></img>
          <h2 id="welcomeText">Bem vindo(a) ao</h2>
          <h2 id="sloganText">MAIOR PORTAL DE <br /> NEGOCIAÇÃO DO NORTE DO BRASIL</h2>
          <TextOne element={"GRÁTIS"} />
          

        </div>
        {}
        <Outlet />
      </div>
    </div>
  );
};

const LoginOption = ({ img, text }) => {
  const [onBox, setOnBox] = useState(false);

  function handleMouse() {
    setOnBox(!onBox);
  }
  const rowStyle = {
    backgroundColor: onBox ? "#f4f4f4" : "white",
    boxShadow: "0px 0px 3px black",
    marginTop: "10px",
    borderRadius: "5%"
  };

  const textStyle = {
    fontWeight: onBox ? "bold" : "normal"
  };
  return (
    <div
      className="row"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      style={rowStyle}
    >
      <div className="col-auto align-self-center" id="icon">
        <img
          src={img}
          alt="../assets/google.png"
          width="20x"
          style={{ marginBottom: "5px", marginTop: "5px" }}
        />
      </div>
      <div className="col align-self-center" style={textStyle}>
        Entrar com o {text}
      </div>
    </div>
  );
};

export default LoginPage;
