import React, { useState, useContext } from "react";
import { Link, Outlet } from 'react-router-dom'
import { Api } from "../../utils/auth.mjs";
import AuthContext from "../../contexts/auth";
import FormStep1 from "./formStep1";

export default function CadastroEmpresa() {

    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                {}
                <Outlet />
            </div>
        </div>
    )
}