import React from "react";// Importe um arquivo CSS para o estilo

const styleCard = {
  marginTop: "10px"
};

const Cotacao = ({ cotacao }) => {
  return (
    <div id="cotacaoPanel" className="col-8 col-6 col-4" style={styleCard}>
      <h2 className="cotacao-title">Cotação {cotacao.numero}</h2>
      <div className="info-group">
        <h3>Informações do Cliente</h3>
        <p>
          <strong>Nome:</strong> {cotacao.cliente.nome}
        </p>
        <p>
          <strong>Contato:</strong> {cotacao.cliente.contato}
        </p>
        <p>
          <strong>Email:</strong> {cotacao.cliente.email}
        </p>
        <p>
          <strong>Telefone:</strong> {cotacao.cliente.telefone}
        </p>
        <p>
          <strong>Endereço:</strong> {cotacao.cliente.endereco}
        </p>
      </div>
      <div className="info-group">
        <h3>Produtos</h3>
        <ul className="product-list">
          {cotacao.produtos.map((produto, index) => (
            <li key={index}>
              {produto.descricao} - Quantidade: {produto.quantidade} - Total: R${" "}
              {produto.total}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total da Cotação:</strong> R$ {cotacao.total_cotacao}
        </p>
      </div>
      <div className="info-group">
        <p>
          <strong>Condições de Pagamento:</strong> {cotacao.condicoes_pagamento}
        </p>
        <p>
          <strong>Prazo de Entrega:</strong> {cotacao.prazo_entrega}
        </p>
        <p>
          <strong>Observações:</strong> {cotacao.observacoes}
        </p>
      </div>
    </div>
  );
};

export default Cotacao;
