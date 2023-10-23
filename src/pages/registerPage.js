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

  
  const formStyle = {
    marginTop:"90px",
    //padding: "1rem",
    //boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    //background: "#413b6b",
    boxShadow: "0px 0px 3px 0px #000000,inset 0px 0px 50px -23px #5c65c0"
  };
  
  const inputStyle = {
    width: "100%",
    maxWidth: "450px",
    minWidth:"205px",
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

    let equalsPass = (formData.confirmPassword === formData.password)
    let lenPass = (formData.confirmPassword.length ===formData.password.length)&& formData.password.length > 8
  console.log(lenPass)
    const passwordStyle={
      width: "100%",
      marginBottom: "10px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxShadow: (equalsPass&&lenPass)? "0px 0px 5px green": "0px 0px 5px red"
    }
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

    return (
      <form style={formStyle}>

          <div className="container text-center">
            <div className="row g-3 justify-content-center" id="row1">
          <h2 className="text-center mb-4" style={{marginTop:"30px", marginBottom:"20px"}}>Registre-se</h2>
              <div className="col-10">
        <label className="form-label">Comece inserindo seu nome e sobrenome abaixo:</label>

              </div>
          <div className="col-auto">
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
          <div className="col-auto col-sm-7">
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
            </div>
            </div>

            <div className="conteiner text-center" style={{marginTop:"20px"}}>
  <div className="row g-3 justify-content-center">
  <div className="col-8">
    <label className="form-label">Digite apenas os números do seu CPF:</label>
  </div>
    <div className="col-auto col-sm-7">
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
  </div>
</div>

              <div className="conteiner text-center" style={{marginTop:"20px"}}>
                <div className="row g-3 justify-content-center">
                <label className="form-label">Digite um e-mail válido:</label>
          <div className="col-auto col-sm-7">
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
          </div>
          </div>

          <div className="conteiner text-center" style={{marginTop:"20px"}}>
                <div className="row g-3 justify-content-center">
          <label className="form-label">Agora crie uma senha forte:</label>
          <div className="col-auto">
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              style={passwordStyle}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          <div className="col-auto">
            <input
              id="confirmpassword"
              type="password"
              placeholder="Repita sua senha"
              style={passwordStyle}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </div>
          <div className="col-8">
          <span id="passwordHelpInline" className="form-text">
      Digite uma senha de 8 a 20 caracteres. Use letras e números. Anote para não esquecer.
    </span>
  </div>
          
                </div>
              </div>

        <div className="container text-center"> 

          <div className="row justify-content-evenly">
            <div style={{marginTop:"20px"}} ><button
                onClick={handleSubmit}
                type="button" // Use type "button" to prevent form submission
                className="btn btn-primary"
              >
                Registrar
              </button></div>
            <div style={{marginTop:"20px", marginBottom:"30px"}} ><Link to={"/"}>
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


  const formContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    marginBottom: "100px"
  };

  return (
    <div style={formContainerStyle}>

<div className="col-sm-6 col-10 col-auto">
<Form/>
      {(registered==false)&&<div className="alert alert-danger" role="alert">
  Usuário não cadatrados: dados inválidos!
</div>}
          {registered&&
            <div style={{position: "relative"}} className="alert alert-success" role="alert">
            Usuário cadastrado com sucesso!
          </div>}
</div>

  


    </div>
  );
};


export default Register;
