import React from "react";
import Rotas from "./routes/routes";

import { AuthProvider } from "./contexts/auth";

function App() {
  //console.log(Rotas);
  return (
    <AuthProvider value={{ signed: true }}>
      <Rotas />
    </AuthProvider>
  );
}

export default App;
