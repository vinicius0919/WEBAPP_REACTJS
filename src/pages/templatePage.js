import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthContext from "../contexts/auth";

export default function TemplatePage() {
  const context = useContext(AuthContext);
  const name = context.user.nome
  


  return (
    <div>
      <Navbar name={name} />
      {}
      <Outlet />
    </div>
  );
}
