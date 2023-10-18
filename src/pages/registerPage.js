import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Email = "admin@admin";
const Senha = "admin";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;
    if (password === confirmPassword) {
      registered(true);
      navigate("/");
    } else {
      setError("Invalid email or password");
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
            id="password"
            type="password"
            placeholder="Repita sua senha"
            style={inputStyle}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <Link>
          <button
            onClick={handleSubmit}
            type="button" // Use type "button" to prevent form submission
            style={buttonStyle}
          >
            Registra
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
