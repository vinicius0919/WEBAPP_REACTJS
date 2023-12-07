import React, { useState, useContext } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth";

const Register = () => {
  const context = useContext(AuthContext)
  const [registered, setRegistered] = useState(null);
  const navigate = useNavigate()
  const formStyle = {
    marginTop: "90px",
    width: "300px",
    padding: "1rem",
    backgroundColor: "#f7f7f7",
    //boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    //background: "#413b6b",
    boxShadow: "0px 0px 5px -3px #000000,inset 0px 0px 30px -23px #5c65c0",
    borderRadius: "20px"
  };

  const Form = () => {
    const [formData, setFormData] = useState({
      nome: "",
      sobrenome: "",
      email: "",
      cpf: "",
      password: "",
      confirmPassword: ""
    });

    let equalsPass = (formData.confirmPassword === formData.password)
    let lenPass = (formData.confirmPassword.length === formData.password.length) && formData.password.length > 8
    const passwordStyle = {
      boxShadow: (equalsPass && lenPass) ? "0px 0px 5px green" : "0px 0px 5px red"
    }

    if (registered != null) {
      setTimeout(() => {
        setRegistered(null);
      }, 10000);
    }


    const handleSubmit = async () => {
      try {

        if (formData.confirmPassword === formData.password) {
          await context.addNewUser(formData.nome, formData.sobrenome, formData.email, formData.password, formData.cpf)
          setRegistered(true)
          setTimeout(() => {
            navigate("/")
          }, 5000);
        } else {
          setRegistered(false)
        }
      } catch (error) {
        setRegistered(false)
      }
    };

    return (
      <div className="col-auto" style={formStyle}>

        <h2  id="inFormText">Faça parte da evolução das negociações</h2>

        <input
          id="text"
          type="text"
          placeholder="Digite seu nome"
          value={formData.nome}
          onChange={(e) =>
            setFormData({ ...formData, nome: e.target.value })
          }
          required
        />
        <input
          id="sobrenome"
          type="text"
          placeholder="Digite seu sobrenome"
          value={formData.sobrenome}
          onChange={(e) =>
            setFormData({ ...formData, sobrenome: e.target.value })
          }
          required
        />

        <input
          id="cpf"
          type="text"
          placeholder="Digite seu CPF"
          value={formData.cpf}
          onChange={(e) =>
            setFormData({ ...formData, cpf: e.target.value })
          }
          required
        />

        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />

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

        <div className="row justify-content-center" style={{ marginTop: "10px" }}>
          <button
            onClick={handleSubmit}
            type="submit" // Use type "button" to prevent form submission
            className="btn btn-primary"
          >
            Cadastrar
          </button>
        </div>
        <div style={{ marginTop: "5px", marginBottom: "30px", textAlign:"center" }} >
          <Link to={"/"}>
            Retornar a tela de login
          </Link>
        </div>

        {(registered===false) && <div className="alert alert-danger" role="alert">
          Usuário não cadatrado: dados inválidos!
        </div>}
        {registered &&
          <div style={{ position: "absolute" }} className="alert alert-success" role="alert">
            Usuário cadastrado com sucesso!
          </div>}
      </div>
    )

  }


  return (
    <Form />

  );
};


export default Register;
