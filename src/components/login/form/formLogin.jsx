import React, { useState, useContext } from "react";
import "../../../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../../contexts/auth";

const LoginForm = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);


  const context = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      if (formData.email !== "" && formData.password !== "") {
        console.log(1)
        const response = await context.logar(formData.email, formData.password);
        if (response) {
          navigate("/painel")
        } else {
          setError("DADOS INVÁLIDOS")
        }
      } else {
        setError("DIGITE SEU EMAIL E SENHA")
      }

    } catch (error) {
      return
    }
  };

  const formStyle = {
    marginTop: "90px",
    width: "300px",
    padding: "1rem",
    backgroundColor:"#f7f7f7",
    //boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    //background: "#413b6b",
    boxShadow: "0px 0px 5px -3px #000000,inset 0px 0px 30px -23px #5c65c0",
    borderRadius:"20px"
  };

  const inputStyle = {
    width: "100%",
    padding: "3px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    fontFamily: `Arial, Helvetica, sans-serif`,
    fontStyle: "italic"
  };

  const TextOne = ({element}) => {
    return (
      <h4 >Negocie {element} com todos os fornecedores ao mesmo <br /> tempo, de forma inteligente</h4>
    )
  }

  return (
        <div className="col-auto" style={formStyle}>
          <h2 id="inFormText">
            Realize seu login para <br />
            encontrar as melhores <br />
            negociações do mercado</h2>
          <div className="mb-3">
            <input
              id="email"
              type="email"
              placeholder="E-mail"
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
              placeholder="Senha"
              style={inputStyle}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
          </div>

          <div className="row justify-content-center">

            <button
              onClick={handleSubmit}
              type="submit" // Use type "button" to prevent form submission
              className="btn btn-primary"
              style={{ background: "#ff610c", border: "none" }}
            >
              Entrar
            </button>
          </div>
          <div className="col-auto" style={{ textAlign: "center" }}>
            <Link to="register">
              Registre-se
            </Link></div>
          <div className="col" style={{ textAlign: "center" }}>
            <Link to="recuperar">Esqueci minha senha</Link>
          </div>
        </div>
  );
};

const LoginOption = ({ img, text }) => {
  const [onBox, setOnBox] = useState(false);

  function handleMouse() {
    setOnBox(!onBox);
  }
  const rowStyle = {
    backgroundColor: onBox ? "#f4f4f4" : "white",
    boxShadow: "0px 0px 3px black",
    marginTop: "10px",
    borderRadius: "5%"
  };

  const textStyle = {
    fontWeight: onBox ? "bold" : "normal"
  };
  return (
    <div
      className="row"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      style={rowStyle}
    >
      <div className="col-auto align-self-center" id="icon">
        <img
          src={img}
          alt="../assets/google.png"
          width="20x"
          style={{ marginBottom: "5px", marginTop: "5px" }}
        />
      </div>
      <div className="col align-self-center" style={textStyle}>
        Entrar com o {text}
      </div>
    </div>
  );
};

export default LoginForm;
