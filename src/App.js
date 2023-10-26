import React from "react";
import Rotas from "./routes/routes";

import { AuthProvider } from "./contexts/auth";

function App() {
  console.clear()
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
}

export default App;
