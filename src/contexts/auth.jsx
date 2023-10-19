import React, { createContext, useState, useEffect } from "react";

import autenticar, {getUser} from "../utils/auth.mjs"

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
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        const data = await getUser(foundUser.token);
        setLog(false);
        setUser({name: data.name, id: data.id, token:foundUser.token });
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
        setUser({token: newuser.token});
        localStorage.setItem("user", JSON.stringify(newuser));
        setLog(false);
      }

    } catch (error) {
      setLog(true)
      console.log(error)
    }

  }

  function deslogar() {
    setUser({})
    localStorage.removeItem("user");
    localStorage.clear();
    setLog(true);
  }

  return (
    <AuthContext.Provider value={{ log, logar, deslogar, user, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
