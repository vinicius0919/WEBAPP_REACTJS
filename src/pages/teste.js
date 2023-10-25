import React from "react";
import imgUser from "../assets/user.png"

const Teste = () => {

  const Cards = () => {
    return (
      <div className="col">
        <div className="card" style={{ width: "190px" }}>
          <img src={imgUser} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">EMPRESA LTDA</h5>
            <p className="card-text">SABÃO</p>
            <a href="#" className="btn btn-primary">Go</a>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container text-center">

      <div className="row justify-content-evenly">
        <h1>PAINEL PRINCIPAL</h1>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>

  );
};


export default Teste;
