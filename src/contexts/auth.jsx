import React, { createContext, useState, useEffect } from "react";

import autenticar, {addUser, getUser} from "../utils/auth.mjs"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [log, setLog] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
  
    fetchUserData(); // Chama a função assíncrona imediatamente
  }, [log]);
  
  const fetchUserData = async () => {
    try {
      const loggedInUser = localStorage.getItem("user");
      console.log(loggedInUser)
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        const foundToken = foundUser.token
        console.log("ESSE É O FOUND TOKEN",foundToken)
        const data = await getUser(foundToken);
        console.log(data)
        setLog(false);
        setUser({nome: data.nome, sobrenome: data.sobrenome, id: data.id, token: foundToken, cpf: data.cpf});
      } else {
        setLog(true);
        setUser({});
      }
    } catch (error) {
      setLog(true);
      setUser({});
      console.log(error);
    }
  };

   async function logar(email, password) {
    try {
      const newuser = await autenticar(email, password)
      if(newuser){
        console.log("TOKEN NA FUNÇAÕ LOGAR:",newuser.access_token)
        const newtoken = newuser.access_token
        await setUser({token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MTE4ZThlLThlM2QtNDc1ZC05OTMyLTY4NTNkNTUyMzE5ZCIsImlhdCI6MTY5NzczMDk3Nn0.KipUrlXvV9nw8bdZYKU3BgFFwiHXfKb_dd7aLoYeVh0"});
        console.log("ESSE É  NEW TOKEN: ",newtoken)
        localStorage.setItem("user", JSON.stringify({token:newtoken}));
        setLog(false);
      }

    } catch (error) {
      setLog(true)
      console.log(error)
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