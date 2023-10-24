import React, { useContext } from "react";
import AuthContext from "../contexts/auth";
import OtherRoutes from "./otherRoutes";

import SignRoutes from "./signRoutes";

//localStorage.setItem('user', JSON.stringify({nome: "Vinicius", sobrenome:"", email:"", cpf:"", token:""}))
const Rotas = () => {
  const context = useContext(AuthContext);
  //console.log(context.log);
  return context.log ? <SignRoutes /> : <OtherRoutes />;
};

export default Rotas;
