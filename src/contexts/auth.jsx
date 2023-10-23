import React, { createContext, useState, useEffect } from "react";

import autenticar, {addUser, getUser, Api} from "../utils/auth.mjs"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [log, setLog] = useState(true);
  const [user, setUser] = useState();
  const api = Api()
  useEffect(() => {
    
    fetchUserData(); // Chama a função assíncrona imediatamente
  }, [log]);
  
  const fetchUserData = async () => {
    try {
      const newData = await api.getUserProfile("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxM2ZkYzY0LWVhMDktNDRhZi1hZTEyLWJmMDc2ODc0MzdmMSIsImlhdCI6MTY5NzgyNzc5M30.Tq1YBZpnOjaUnRvxxkAvO22A4S0YeU4O51VmOYT6eBs")

      
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        const foundToken = foundUser.token
        const data = await getUser(foundToken);
        setLog(false);
        setUser({nome: data.nome, sobrenome: data.sobrenome, email:data.email, id: data.id, token: foundToken, cpf: data.cpf});
      } else {
        setLog(true);
        setUser({});
      }
    } catch (error) {
      setLog(true);
      setUser({});
  }
  };

   async function logar(email, password) {
    try {
      const newuser = await autenticar(email, password)
      if(newuser){
        const newtoken = newuser.access_token
        await setUser({token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MTE4ZThlLThlM2QtNDc1ZC05OTMyLTY4NTNkNTUyMzE5ZCIsImlhdCI6MTY5NzczMDk3Nn0.KipUrlXvV9nw8bdZYKU3BgFFwiHXfKb_dd7aLoYeVh0"});
        localStorage.setItem("user", JSON.stringify({token:newtoken}));
        setLog(false);
      }

    } catch (error) {
      setLog(true)
    }

  }

  const addNewUser = async (nome, sobrenome, email, password, cpf) =>{
    const register = await addUser(nome, sobrenome, email, password, cpf)
    return register
  }
  function deslogar() {
    setUser({})
    localStorage.removeItem("user");
    localStorage.clear();
    setLog(true);
  }

  return (
    <AuthContext.Provider value={{ log, logar, deslogar, user, addNewUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
