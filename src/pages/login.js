import React, { useState, useContext } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import autenticar from "../utils/auth.mjs";
import googleImage from "../assets/google.png";
import facebookImage from "../assets/facebook.png";
import appleImage from "../assets/apple.png";
import AuthContext from "../contexts/auth";

const LoginPage = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const context = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      await context.logar(formData.email, formData.password);
      //console.log(context.log)
      if (!context.log) {
        navigate("/");
      } else {
        setError("USUÁRIO NÃO ENCONTRADO");
      }
    } catch (error) {
      console.log(error)
    }
  };

  const formStyle = {
    marginTop: "90px",
    width: "300px",
    padding: "1rem",
    //boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    //background: "#413b6b",
    boxShadow: "0px 0px 5px -3px #000000,inset 0px 0px 30px -23px #5c65c0"
  };

  const inputStyle = {
    width: "95%",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  };

  return (
    <div className="conteiner text-center fluid">
      <div className="row justify-content-center">
        <div className="col-auto align-self-center" style={formStyle}>
          <h2>Login</h2>
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

          <button
            onClick={handleSubmit}
            type="button" // Use type "button" to prevent form submission
            className="btn btn-primary"
          >
            Login
          </button>

          <div
            style={{ marginTop: "10px" }}
            className="row justify-content-center"
          >
            <div className="col">
              <Link to="register">
                <button
                  type="button" // Use type "button" to prevent form submission
                  className="btn btn-success"
                >
                  Registre-se
                </button>
              </Link>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "10px" }}
          >
            <div className="col" style={{ textAlign: "center" }}>
              <Link to="recuperar">Esqueci minha senha</Link>
            </div>
          </div>
          <div className="container text-center">
            <LoginOption img={googleImage} text="Google" />
            <LoginOption img={facebookImage} text="Facebook" />
            <LoginOption img={appleImage} text="Apple" />
          </div>
          <script src="/login.js"></script>
        </div>
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

export default LoginPage;
