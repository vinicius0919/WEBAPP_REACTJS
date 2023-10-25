import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Cadastro from "../pages/cadastro";
import Cota from "../pages/cotas";
import TemplatePage from "../pages/templatePage";
import FornecedorComplete from "../pages/fornecedorComplete";
import FornecedoresCards from "../components/FornecedoresCards";
import UpdateUser from "../pages/update";
import Empresas from "../pages/empresas";
import Teste from "../pages/teste";
import NovaEmpresa from "../pages/novaEmpresa";



import f from "../datas/fornecedor.json";

import AuthContext from "../contexts/auth";

const NotFound = () => {
  const navigate = useNavigate();
  function toStart() {
    navigate("/");
  }

  return (
    <div onClick={toStart}>
      <h1>Erro 404 - Página não encontrada</h1>
      <h2>Clique em qualquer lugar para volta à página inicial</h2>
    </div>
  );
};

const Logout = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  function handle() {
    context.deslogar();
    navigate("/");
  }
  function cancelar() {
    navigate("/");
  }
  return (
    <div className="container text-center">
      <h1>Deseja mesmo sair?</h1>
      <button className="btn btn-danger" onClick={handle}>
        Sim
      </button>
      <button className="btn btn-primary" onClick={cancelar}>
        Não
      </button>
    </div>
  );
};
const OtherRoutes = () => {
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
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cota" element={<Cota />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/perfil" element={<UpdateUser />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/empresas/adicionar" element={<NovaEmpresa/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default OtherRoutes;
