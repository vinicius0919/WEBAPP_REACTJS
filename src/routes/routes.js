import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Cota from "../pages/cotas";
import Fornecedores from "../pages/fornecedoresPage";
import TemplatePage from "../pages/templatePage";
import FornecedorComplete from "../pages/fornecedorComplete";
import FornecedoresCards from "../components/FornecedoresCards";
import RegisterPage from "../pages/registerPage";
import Teste from "../pages/teste";

import f from "../datas/fornecedor.json";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          <Route index element={<Teste />} />
          <Route
            path="fornecedores"
            element={<FornecedoresCards fornecedores={f} />}
          />
          <Route
            path="fornecedor"
            element={<FornecedorComplete fornecedores={f} />}
          />
        </Route>

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cota" element={<Cota />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
