import React, { useContext, useState } from "react";
import ListEmpresas from "../components/empresas/listaEmpresas";
import AddButton from "../components/geral/addButton";
import AuthContext from "../contexts/auth";
import { useEffect } from "react";
import { Api } from "../utils/auth.mjs";

export default function Empresas() {
    const context = useContext(AuthContext)
    const api = Api()

    const [index, setIndex] = useState(0);

    const handleSelectChange = (event) => {
        setIndex(parseInt(event.target.value, 0)); // Converte o valor para um número inteiro
    };

    async function getData() {
        const req = await Promise.all([
            api.getEmpresa(context.user.token)
        ])
        await context.setEmpresas(req[index])
    }

    const [exist, setExist] = useState(false)

    useEffect(() => {
        getData()
        if (context.empresas) {
            setExist(true)
        } else {
            setExist(false)
        }
    }, [context.empresas])
    return (
        <div className="container text-center" style={{position:"absolute"}}>
            <div className="row">
            <AddButton />
            <select defaultValue={index} onChange={handleSelectChange} className="form-select" aria-label="Default select example">
                <option value={0}>Minhas Empresas</option>
                <option value={1}>Outras Empresas</option>
            </select>
            </div>


            {exist && <ListEmpresas empresas={context.empresas} />}

            </div>
    )
}
