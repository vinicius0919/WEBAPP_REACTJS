import React, { useState } from "react";
import { Link } from "react-router-dom"; // Adicionado o import

//import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Fornecedor.css";
import userImg from "../assets/user.png";

const FornecedorCard = ({ fornecedor, index }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [darkOverlay, setDarkOverlay] = useState(false);

  const stlCard = {
    position: moreInfo ? "absolute" : "relative",
    zIndex: moreInfo ? "2" : "0",
    left: moreInfo ? "28%" : "auto",
    right: moreInfo ? "28%" : "auto"
  };

  const styleDark = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)" /* Cor escura com transparência */,
    zIndex: "1"
  };

  function handle() {
    setMoreInfo(!moreInfo);
    setDarkOverlay(!darkOverlay); // Ative a sobreposição escura
  }

  return (
    <div className="col-4 justify-content-center">
      <div className="card" style={stlCard}>
        <div className="card-body">
          <img
            src={userImg}
            className="card-img-top"
            alt="fornecedor-img-perfil"
            style={{ width: "50%" }}
          />
          <p className="card-text">
            <strong>Fornecedor:</strong>
            <br />
            {fornecedor.nome}
          </p>
          <button className="btn btn-primary" onClick={handle}>
            {moreInfo ? "Ver menos" : "Ver mais"}
          </button>
          {moreInfo && (
            <Link to={"/fornecedor?id=" + index} className="btn btn-primary">
              Ver tudo
            </Link>
          )}
          {moreInfo && (
            <div>
              <div className="modal-body">
                <p className="card-text">
                  <strong>Telefone:</strong>
                  <br />
                  {fornecedor.telefone}
                </p>
                <p className="card-text">
                  <strong>Endereço:</strong>
                  <br />
                  {fornecedor.endereco}
                </p>
                <p className="card-text">
                  <strong>Site:</strong>
                  <br />
                  {fornecedor.site}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {darkOverlay && <div className="dark-overlay" style={styleDark}></div>}
    </div>
  );
};

export default FornecedorCard;
