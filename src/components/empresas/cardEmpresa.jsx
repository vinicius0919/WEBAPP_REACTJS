import React from "react";
import { Link } from "react-router-dom"

export default function CardEmpresa(props) {
    const styleText={
        textTransform:"capitalize"
    }
    //const cnpj =(`${props.cnpj.slice(0,2)}.${props.cnpj.slice(2,5)}.${props.cnpj.slice(5,8)}/${props.cnpj.slice(8,12)}-${props.cnpj.slice(12)}`)
    return (
        <div className="col-12 col-sm-6 align-self-center" style={{marginBottom:"20px"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title" style={styleText} >{props.nome_fantasia}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary" style={styleText}>{props.razao_social}</h6>
                    <p className="card-text">{props.cnpj}</p>
                    <Link to="/">
                        <button className="btn btn-primary">Abrir Painel</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}