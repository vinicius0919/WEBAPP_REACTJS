import React from "react";
import Rotas from "./routes/routes";

import { AuthProvider } from "./contexts/auth";

function App() {
  //console.log(Rotas);
  return (
    <AuthProvider value={{ signed: true }}>
      <Rotas />
      <link rel="icon" type="image/x-icon" href="./assets/favicon.ico"/>

    </AuthProvider>
  );
}

export default App;
