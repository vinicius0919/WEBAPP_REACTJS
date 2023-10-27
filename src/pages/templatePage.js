import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/templatePage/Navbar";
import AuthContext from "../contexts/auth";

export default function TemplatePage() {
  const context = useContext(AuthContext)
  const name = context.name


  return (
    <div>
      <Navbar name={name} />
      { }
      <Outlet />
    </div>
  );
}
