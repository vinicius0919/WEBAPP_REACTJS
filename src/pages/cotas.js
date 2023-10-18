import React from "react";
import Cotacao from "../components/Cota"; // Supondo que o componente esteja no arquivo Cotacao.js
import cotacoesData from "../datas/cotacao.json"; // Importe o JSON
import Navbar from "../components/Navbar";

function Cotas() {
  return (
    <div>
      <Navbar />
      <div className="container text-center">
        <div className="row justify-content-evenly">
          {cotacoesData.cotacoes.map((cotacao, index) => (
            <Cotacao key={index} cotacao={cotacao} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cotas;
