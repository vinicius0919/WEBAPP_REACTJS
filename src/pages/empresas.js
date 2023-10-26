import React, { useContext, useState } from "react";
import ListEmpresas from "../components/empresas/listaEmpresas";
import AddButton from "../components/geral/addButton";
import AuthContext from "../contexts/auth";
import { useEffect } from "react";


export default function Empresas() {
    const context = useContext(AuthContext)
    const [exist, setExist] = useState(false)

    useEffect(() => {
        context.fetchUserData()
        if (context.empresas) {
            setExist(true)
        } else {
            setExist(false)
        }
    }, [])
    return (
        <div className="container text-center">
            <AddButton />
            {exist && <ListEmpresas empresas={context.empresas} />}
        </div>
    )
}
