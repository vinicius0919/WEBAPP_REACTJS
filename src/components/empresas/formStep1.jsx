import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { Api } from "../../utils/auth.mjs";
import AuthContext from "../../contexts/auth";

export default function FormStep1(props) {
    const [formData, setForm] = useState({ nome_fantasia: "", razao_social: "", cnpj: "" })
    const [counter, setCounter] = useState(0)
    const [registered, setRegistered] = useState();
    const api = Api()
    const context = useContext(AuthContext)

    function avancar(){
        setCounter(50)
    }

    const effectProgress = {
        width: `${counter}%` 
    }

    return (
        <div>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={effectProgress}></div>
            </div>
            <h2>{props.text}</h2>
            <Link to="step2">
                <button className="btn btn-primary" type="button" onClick={avancar}>next</button>
            </Link>

        </div>
    )
}