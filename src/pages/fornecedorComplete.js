import React from "react";
import "../styles/Fornecedor.css"; // Adicione esta linha

const borderStyle = {
  border: "1px solid black"
};

const ProdutoItem = ({ item, index }) => (
  <div key={item.produto} className={`row ${index % 2 !== 0 ? "bg-gray" : ""}`}>
    <div className="col-md-4 col-3" style={borderStyle}>
      {item.descricao}
    </div>
    <div className="col-md-2 col-2" style={borderStyle}>
      {item.preco_unitario}
    </div>
    <div className="col-md-2 col-2" style={borderStyle}>
      {item.estoque_disponivel}
    </div>
    <div className="col-md-2 col-3" style={borderStyle}>
      {item.ncm}
    </div>
    <div className="col-2" style={borderStyle}>
      <button className="btn btn-success btn-responsivo">Editar</button>
      <button className="btn btn-danger btn-responsivo">Deletar</button>
    </div>
  </div>
);

const FornecedorComplete = ({ fornecedores }) => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const fornecedor = fornecedores.fornecedores[id];

  const elementosProdutos = fornecedor.produtos_fornecidos.map(
    (item, index) => <ProdutoItem key={index} item={item} index={index} />
  );

  return (
    <div className="container text-center">
      <h2>{fornecedor.nome}</h2>

      <div className="row justify-content-center">
        <div className="col-lg-6 col-12 mb-3">
          <strong>CNPJ:</strong>
          <input
            className="form-control"
            defaultValue={fornecedor.cnpj}
            readOnly
          />
        </div>
        <div className="col-lg-6 col-12 mb-3">
          <strong>Telefone:</strong>
          <input
            className="form-control"
            defaultValue={fornecedor.telefone}
            readOnly
          />
        </div>

        <div className="col-lg-6 col-12 mb-3">
          <strong>Endereço:</strong>
          <input
            className="form-control"
            defaultValue={fornecedor.endereco}
            readOnly
          />
        </div>
        <div className="col-lg-6 col-12 mb-3">
          <strong>Email:</strong>
          <input
            className="form-control"
            defaultValue={fornecedor.email}
            readOnly
          />
        </div>

        <h2>Produtos</h2>
        <div className="container">
          <div className="row bg-secondary text-white">
            <div className="col-6">Descrição</div>
            <div className="col-3">Preço</div>
            <div className="col-3">Estoque</div>
            <div className="col-3">NCM</div>
            <div className="col-4">Ações</div>
          </div>
          {elementosProdutos}
        </div>
      </div>
    </div>
  );
};

export default FornecedorComplete;
