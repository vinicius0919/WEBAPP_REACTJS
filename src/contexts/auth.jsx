import React, { createContext, useState, useEffect } from "react";

import {autenticar, addUser, getUser, Api} from "../utils/auth.mjs"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [log, setLog] = useState(true);
  const [user, setUser] = useState();
  const api = Api()

  useEffect(() => {
    console.log("executando")
    fetchUserData(); // Chama a função assíncrona imediatamente
  }, []);

  const fetchUserData = async () => {
    try {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            const foundToken = foundUser.token;

            const [userData, profileData] = await Promise.all([
                getUser(foundToken),
                api.getUserProfile(foundToken)
            ]);

            setLog(false);
            setUser({
                nome: userData.nome,
                sobrenome: userData.sobrenome,
                email: userData.email,
                id: userData.id,
                token: foundToken,
                cpf: userData.cpf
            });
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
      const newuser = await api.authUser(email, password)
      if(newuser){
        const newtoken = newuser.access_token
        await setUser({token: newtoken});
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
    <AuthContext.Provider value={{ log, logar, deslogar, setUser, user, addNewUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
