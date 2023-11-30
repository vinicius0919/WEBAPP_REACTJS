import React from "react";
import "../styles/styles.css"
const Teste = () => {

  return (
    <div className="container" style={{ position: "relative", display: "flex", width: "100%", height: "100%" }}>

      <div className="row justify-content-between">

        <div className="dashboard">
          <div className="bar-charts">
            <h3>Cotações Realizadas - Agosto</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "60%" }}></div>
            <h3>Cotações Participadas - Agosto</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "80%" }}></div>
            <h3>Cotações Realizadas - Setembro</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "30%" }}></div>
            <h3>Cotações Participadas - Setembro</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "70%" }}></div>
            <h3>Cotações Realizadas - Outubro</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "50%" }}></div>
            <h3>Cotações Participadas - Outubro</h3>
            <div className="chart" style={{ backgroundColor: "#ff610c", width: "60%" }}></div>
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
