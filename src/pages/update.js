import React, { useState, useContext, useEffect, useInsertionEffect } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth";
const Email = "admin@admin";
const Senha = "admin";
import { Api } from "../utils/auth.mjs";
const UpdateUser = () => {
  const context = useContext(AuthContext)

  const [error, setError] = useState(null);
  const [registered, setRegistered] = useState(null);
  const navigate = useNavigate();

  const user = context.user
  const api = Api()
  
  const inputStyle = {
    width: "300px",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  };

  const Form = () =>{
    console.log(user.email)
    const [formData, setFormData] = useState({
      nome: user.nome,
      sobrenome: user.sobrenome,
      email: user.email,
      cpf: user.cpf,
      password: "umbanda"
    });
    useEffect(()=>{
  
      
    },[]);
  
    const handleSubmit = async () => {
  
      console.log(user.id)
      try {
        
          await api.updateUser(formData.nome, formData.sobrenome, user.token, user.id)
          setRegistered(true)
      } catch (error) {
          setRegistered(false)
          console.log(error)
      }
    };

    return (
      <form >
          <h2 className="text-center mb-4">Atualizar Dados</h2>
          <div className="mb-3">
            <input
              id="text"
              type="text"
              placeholder="Digite seu nome"
              style={inputStyle}
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <input
              id="sobrenome"
              type="text"
              placeholder="Digite seu sobrenome"
              style={inputStyle}
              value={formData.sobrenome}
              onChange={(e) =>
                setFormData({ ...formData, sobrenome: e.target.value })
              }
              required
            />
          </div>

          <fieldset disabled>

          <div className="mb-3">
            <input
              id="cpf"
              type="text"
              style={inputStyle}
              value={formData.cpf}
              onChange={(e) =>
                setFormData({ ...formData, cpf: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <input
              id="email"
              type="email"
              style={inputStyle}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              style={inputStyle}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            </div>
          </fieldset>
      

          <div className="row justify-content-evenly">
            <div ><button
                onClick={handleSubmit}
                type="button" // Use type "button" to prevent form submission
                className="btn btn-primary"
              >
                Registrar
              </button></div>
            <div style={{marginTop:"20px"}} ><Link to={"/"}>
                <button
                  className="btn btn-success"
                  type="button" 
                >
                  Voltar
                </button>
              </Link></div>
                                             
          </div>
        </form>
    )
  
  }

  return (
    <div className="conteiner text-center">
      {(registered==false)&&<div className="alert alert-danger" role="alert">
  Usuário não cadatrados: dados inválidos!
</div>}
          {registered&&
            <div style={{position: "relative"}} className="alert alert-success" role="alert">
            Usuário cadastrado com sucesso!
          </div>}

          <div className="row justify-content-center">
            <div className="col">

              <Form />
            </div>
          </div>
    </div>
  );
};


export default UpdateUser;