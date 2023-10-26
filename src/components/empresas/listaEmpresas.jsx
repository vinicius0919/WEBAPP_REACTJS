import React from "react";
import CardEmpresa from "./cardEmpresa";

export default function ListEmpresas({ empresas }) {

    console.log(empresas)

    const Cards = ()=>{
        try {
            return(empresas.map((element, index) =>
                (<CardEmpresa key={index} nome_fantasia={element.nome_fantasia} cnpj={element.cnpj} razao_social={element.razao_social} />
                )))
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="row justify-content-center">
            <Cards />
        </div>
    )
}