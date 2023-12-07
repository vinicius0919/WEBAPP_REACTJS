import React from "react";
import "../styles/styles.css"
const Teste = () => {

  return (
    <div className="container" style={{ position: "relative", display: "flex", width: "100%", height: "100%" }}>

      <div className="row justify-content-between">

        <div className="dashboard">
          <div className="bar-charts">
            <h3>Cotações Realizadas</h3>
            <h3>Agosto</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "80%", textAlign:"center" }}>80</div>
            <h3>Setembro</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "30%", textAlign:"center" }}>30</div>
            <h3>Outubro</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "70%", textAlign:"center" }}>70</div>
            <h3>Novembro</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "50%", textAlign:"center" }}>50</div>
            <h3>Dezembro</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "60%", textAlign:"center" }}>60</div>
          </div>

        </div>
        <div className="col-6" id="news">
          <h2>Main News</h2>
          <p>Intel Developer Cloud: oferece acesso antecipado a novas tecnologias da Intel, permitindo que os usuários testem e desenvolvam soluções mesmo antes do anúncio oficial dos produtos. Destaca-se a capacidade da nuvem em resolver problemas de dependências de software e hardware, tornando a otimização de desempenho e a escalabilidade mais fáceis e rápidas.</p>
        </div>

      </div>
    </div>

  );
};


export default Teste;
