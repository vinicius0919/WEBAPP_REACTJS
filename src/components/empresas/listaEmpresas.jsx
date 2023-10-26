import React from "react";
import CardEmpresa from "./cardEmpresa";

export default function ListEmpresas({ empresas }) {

    const Cards = () => {
        try {
            return (empresas.map((element, index) =>
            (<CardEmpresa key={index} nome_fantasia={element.nome_fantasia} cnpj={element.cnpj} razao_social={element.razao_social} />
            )))

        } catch (error) {
            return
        }
    }

    return (
        <div className="row justify-content-center">
            <Cards />
        </div>
    )
}