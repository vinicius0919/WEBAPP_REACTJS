import React, { useState, useContext } from "react";
import {Link} from 'react-router-dom'
import { Api } from "../../utils/auth.mjs";
import AuthContext from "../../contexts/auth";

export default function FormNovaEmpresa() {
    const [formData, setForm] = useState({ nome_fantasia: "", razao_social: "", cnpj: "" })
    const api = Api()
    const context = useContext(AuthContext)
    async function send(){
        api.addNewEmpresa(context.user.token, formData.nome_fantasia, formData.razao_social, formData.cnpj)
        await context.fetchUserData()
    }

    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6">
                    <h2>Cadastrar nova empresa</h2>
                    <h3 style={{ fontSize: "20px", color: "green" }}>Preencha todos os dados corretamente para efetuar o cadastro</h3>
                    <form>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="nome_fantasia">Informe o nome fantasia</label>
                            <input onChange={(e) => {
                                setForm({ ...formData, nome_fantasia: e.target.value })
                            }} className="form-control" placeholder="minha empresa eirele" id="nome_fantasia" type="text" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="razao_social">Informe a Razão Social</label>
                            <input onChange={(e) => {
                                setForm({ ...formData, razao_social: e.target.value })
                            }} className="form-control" placeholder="razao social exemplo" id="razao_social" type="text" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="cnpj">Digite apenas os numeros do CNPJ</label>
                            <input onChange={(e) => {
                                setForm({ ...formData, cnpj: e.target.value })
                            }} className="form-control" placeholder="00111222444455" id="cnpj" type="text" />
                        </div>
                    </form>

                </div>
                    <div className="row justify-content-evenly">

                    <button className="btn btn-success" onClick={send} type="submit" style={{width:"120px", marginBottom:"20px"}}>Cadastrar</button>
                    <Link to={'/empresas'}>
                    <button className="btn btn-primary">Voltar</button>
                    </Link>
                    </div>
            </div>
        </div>
    )
}