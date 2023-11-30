import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "../styles/styles.css"

import Cota from "../pages/cotas";
import TemplatePage from "../pages/templatePage";
import FornecedorComplete from "../pages/fornecedorComplete";
import FornecedoresCards from "../components/fornecedores/FornecedoresCards";
import UpdateUser from "../pages/update";
import Empresas from "../pages/empresas";
import Teste from "../pages/teste";
import NovaEmpresa2 from "../pages/empresas2";



import f from "../datas/fornecedor.json";

import AuthContext from "../contexts/auth";
import FormStep1 from "../components/empresas/formStep1";

const NotFound = () => {
  const navigate = useNavigate();
  function toStart() {
    navigate("/painel");
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
    navigate("/painel");
  }
  return (
    <div className="container text-center">
      <h1>Deseja mesmo sair?</h1>
      <div id="yes-not">

      <button id="logout-yes" onClick={handle}>
        Sim
      </button>
      <button id="logout-no" onClick={cancelar}>
        Não
      </button>
      </div>
    </div>
  );
};
const OtherRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/painel" element={<TemplatePage />}>
          <Route index element={<Teste />} />
          <Route
            path="fornecedores"
            element={<FornecedoresCards fornecedores={f} />}
          />
          <Route
            path="fornecedor"
            element={<FornecedorComplete fornecedores={f} />}
          />
          <Route path="cota" element={<Cota />} />
          <Route path="logout" element={<Logout />} />
{/** PÁGINA DE VISUALIZAÇÃO DOS DADOS CADASTRAIS DO USUÁRIO */}
          <Route path="perfil" element={<UpdateUser />} />

{/** PÁGINA DE VISUALIZAÇÃO DAS EMPRESAS CADASTRADAS */}
          <Route path="empresas" element={<Empresas />} />

{/** ROTA DE CADASTRO DE EMPRESAS DIVIDIDA EM TRÊS ETAPAS */}
          <Route path="empresas/adicionar" element={<NovaEmpresa2 />} >
            <Route index element={<FormStep1 text="form1" />} />
            <Route path="step2" element={<FormStep1 text="form2" />} />
          </Route>
        </Route>

{/** PÁGINA DEFAULT CASO NÃO A ROTA PROCURADA NÃO EXISTA */}
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default OtherRoutes;
