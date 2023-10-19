import React, { useContext } from "react";
import AuthContext from "../contexts/auth";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import OtherRoutes from "./otherRoutes";

import SignRoutes from "./signRoutes";

const Rotas = () => {
  const context = useContext(AuthContext);
  //console.log(context.log);
  return context.log ? <SignRoutes /> : <OtherRoutes />;
};

export default Rotas;
