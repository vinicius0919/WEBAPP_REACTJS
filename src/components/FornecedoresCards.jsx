import React from "react";
import FornecedorCard from "./FornecedorCard"; // Supondo que o componente esteja no arquivo Cotacao.js
import fornecedoresData from "../datas/fornecedor.json"; // Importe o JSON

export default function FornecedoresCards() {
  return (
    <div className="container text-center">
      <div className="row" style={{ position: "relative" }}>
        {fornecedoresData.fornecedores.map((fornecedor, index) => (
          <FornecedorCard fornecedor={fornecedor} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
