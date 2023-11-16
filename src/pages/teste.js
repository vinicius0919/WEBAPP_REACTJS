import React from "react";
import imgUser from "../assets/user.png"

const Teste = () => {

  const Cards = () => {
    return (
      <div className="col-6 col-md-3">
        <div className="card">
          <img src={imgUser} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">EMPRESA LTDA</h5>
            <p className="card-text">SABÃO</p>
            <button className="btn btn-primary">Go</button>
          </div>
        </div> 
      </div>
    )
  }
  return (
    <div className="container text-center">

      <div className="row justify-content-center">
        <h1>PAINEL PRINCIPAL</h1>
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
