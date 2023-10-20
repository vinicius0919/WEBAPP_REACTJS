import React, { useState, useContext, useEffect } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth";
const Email = "admin@admin";
const Senha = "admin";

const Register = () => {
  const context = useContext(AuthContext)

  const [error, setError] = useState(null);
  const [registered, setRegistered] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{

    setTimeout(() => {
      setRegistered(null);
    }, 10000);
    
  },[registered]);

  const handleSubmit = async () => {
    try {
      
      if(formData.confirmPassword===formData.password){
        await context.addNewUser(formData.nome, formData.sobrenome, formData.email, formData.password, formData.cpf)
        setRegistered(true)
      }else{
        setRegistered(false)
      }
    } catch (error) {
        setRegistered(false)
        console.log(error)
    }
  };



  const inputStyle = {
    width: "300px",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  };

  const Form = () =>{
    const [formData, setFormData] = useState({
      nome: "",
      sobrenome: "",
      email: "",
      cpf: "",
      password: "",
      confirmPassword: ""
    });

    return (
      <form >
          <h2 className="text-center mb-4">Registre-se</h2>
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
          <div className="mb-3">
            <input
              id="cpf"
              type="text"
              placeholder="Digite seu CPF"
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
              placeholder="Digite seu e-mail"
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
          <div className="mb-3">
            <input
              id="confirmpassword"
              type="password"
              placeholder="Repita sua senha"
              style={inputStyle}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </div>
        <div className="container"> 

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
        </div>
        </form>
    )
  
  }

  return (
    <div className="conteiner text-center">
      {(registered==false)&&<div class="alert alert-danger" role="alert">
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


export default Register;
