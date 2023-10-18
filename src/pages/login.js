import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import autenticar from "../utils/auth.mjs";


const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async() => {
    
    try {
      const response = await autenticar(formData.email, formData.password)
      if (response==true) {
        navigate("/fornecedores")
      } else {
        setError("USUÁRIO NÃO ENCONTRADO")
      }
    } catch (error) {
      
    }
   
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

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <input
            id="email"
            type="email"
            placeholder="Email"
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
            placeholder="Password"
            style={inputStyle}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

          <button
            onClick={handleSubmit}
            type="button" // Use type "button" to prevent form submission
            style={buttonStyle}
          >
            Login
          </button>

        <div
          style={{ marginTop: "10px" }}
          className="row justify-content-center"
        >
          <div className="col align-self-start">
            <button
              onClick={handleSubmit}
              type="button" // Use type "button" to prevent form submission
              style={buttonStyle}
            >
              REGISTRE-SE
            </button>
          </div>
          <div className="col align-self-end">
            <button
              onClick={handleSubmit}
              type="button" // Use type "button" to prevent form submission
              style={buttonStyle}
            >
              Login
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
