import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate
} from "react-router-dom";

// IMPORTANDO COMPONENTES
import LoginPage from "../pages/login";
import Recuperar from "../components/recuperar/Recuperar";
import RegisterPage from "../pages/registerPage";
import LoginForm from "../components/login/form/formLogin";

const NotFound = () => {
  const navigate = useNavigate();
  function toStart() {
    navigate("/");
  }

  return (
    <div onClick={toStart}>
      <h1>Erro 404 - Página não encontrada</h1>
      <h2>Clique aqui para efetuar seu login</h2>
    </div>
  );
};

function TemplatePage() {
  return (
    <div>
      {}
      <Outlet />
    </div>
  );
}

const SignRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route index element={<LoginForm />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="recuperar" element={<Recuperar />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SignRoutes;
