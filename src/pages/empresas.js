import React, { useContext, useState } from "react";
import ListEmpresas from "../components/empresas/listaEmpresas";
import AddButton from "../components/geral/addButton";
import AuthContext from "../contexts/auth";
import { useEffect } from "react";


export default function Empresas() {
    const context = useContext(AuthContext)
    const [localEmpresas, setEmpresas] = useState(context.empresas)
    useEffect(()=>{
        setEmpresas(context.empresas)
    },[context.empresas])

    return (
        <div className="container text-center">
            <AddButton />
            <ListEmpresas empresas={localEmpresas} />
        </div>
    )
}
