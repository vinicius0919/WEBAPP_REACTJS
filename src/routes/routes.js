import React, { useContext } from "react";
import AuthContext from "../contexts/auth";
import OtherRoutes from "./otherRoutes";

import SignRoutes from "./signRoutes";
const Rotas = () => {
  const context = useContext(AuthContext);
  return /*context.log*/ false? <SignRoutes /> : <OtherRoutes />;
};

export default Rotas;
