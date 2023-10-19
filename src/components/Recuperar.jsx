import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import autenticar from "../utils/auth.mjs";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("Certifique-se de digitar um e-mail válido");
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  };

  const formStyle = {
    width: "300px",
    padding: "20px",
    //boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    //background: "#413b6b",
    boxShadow: "0px 0px 5px -3px #000000,inset 0px 0px 30px -23px #5c65c0"
  };

  const inputStyle = {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2 className="text-center mb-4">Recupere sua conta</h2>
        <div className="mb-3">
          <h3
            style={{
              fontSize: "16px",
              color: "green",
              textShadow: "0px 0px 1px black",
              textAlign: "center",
              padding: "10px"
            }}
          >
            Digite seu email, você receberá um código válido por 30 minutos para
            efetuar a recuperação da sua conta
          </h3>
          <input
            id="email"
            type="email"
            placeholder="Exemplo: fulano@email.com"
            style={inputStyle}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <button
              onClick={handleSubmit}
              type="button" // Use type "button" to prevent form submission
              className="btn btn-primary"
            >
              Enviar
            </button>
          </div>
          <div className="col-4 align-self-start">
            <Link to={"/login"}>
              <button
                className="btn btn-success"
                type="button" // Use type "button" to prevent form submission
              >
                Voltar
              </button>
            </Link>
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
