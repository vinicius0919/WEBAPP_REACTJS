import React, { useState } from "react";
//import "../styles/Login.css";
import { Link } from "react-router-dom";


const Recuperar = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);


  const handleSubmit = async () => {
    setError("Certifique-se de digitar um e-mail válido");
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
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "20px"
  };

  return (
        <div className="col-auto" style={formStyle}>
          <form >
            <div className="mb-3">
              <h2 style={{ marginTop: "30px", textAlign: "center" }}>Recupere sua conta</h2>
              <h3
                style={{
                  fontSize: "16px",
                  color: "green",
                  textShadow: "0px 0px 1px black",
                  textAlign: "center",
                  padding: "10px",
                  marginBottom: "20px"
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
            <div className="row justify-content-center" >

              <button
                onClick={handleSubmit}
                type="button" // Use type "button" to prevent form submission
                className="btn btn-primary"
              >
                Enviar
              </button>
            </div>

            <div style={{textAlign:"center", marginTop: "3px"}}>
              <Link to={"/"}>
                <button
                  className="btn btn-success"
                  type="button" // Use type "button" to prevent form submission
                  style={{ marginBottom: "3px", padding: "5px", borderRadius: "20px" }}
                >
                  Voltar
                </button>
              </Link>
              {error && <div style={{ color: "red" }}>{error}</div>}
            </div>
          </form>
        </div>
  );
};

export default Recuperar;
