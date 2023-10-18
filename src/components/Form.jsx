import { useState } from "react";
export const db = [];

const Form = () => {
  function create() {
    let nome = document.getElementById("nomeFornecedor").value;
    let dataEmissao = document.getElementById("dataEmissao").value;
    let chaveAcesso = document.getElementById("chaveAcesso").value;
    let numeroNota = document.getElementById("numeroNota").value;
    let serie = document.getElementById("serie").value;

    //console.log(db);

    db.push({
      nome: nome,
      dataEmissao: dataEmissao,
      chaveAcesso: chaveAcesso,
      numeroNota: numeroNota,
      serie: serie
    });
  }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nomeFornecedor" className="form-label">
          Nome Fornecedor
        </label>
        <input
          type="text"
          className="form-control"
          id="nomeFornecedor"
          aria-describedby="nomeFornecedorHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dataEmissao" className="form-label">
          Data emissão
        </label>
        <input type="date" className="form-control" id="dataEmissao" />
      </div>
      <div className="mb-3">
        <label htmlFor="chaveAcesso" className="form-label">
          Chave de Acesso
        </label>
        <input type="text" className="form-control" id="chaveAcesso" />
      </div>
      <div className="mb-3">
        <label htmlFor="numeroNota" className="form-label">
          Número da nota
        </label>
        <input type="text" className="form-control" id="numeroNota" />
      </div>
      <div className="mb-3">
        <label htmlFor="serie" className="form-label">
          Série
        </label>
        <input type="text" className="form-control" id="serie" />
      </div>
      <button type="submit" onClick={create} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
