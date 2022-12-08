import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  function fillUserData({ token, tipo }) {
    localStorage.setItem("@authDentista", JSON.stringify({ token, tipo }));

    setUserData({ ...userData, token, tipo });
  }

  function emptyUserData() {
    setUserData({ token: "", tipo: "" });
  }

  useEffect(() => {
    const res = localStorage.getItem("@authDentista");

    let user;

    if (res) {
      user = JSON.parse(res);

      fillUserData({ token: user.token, tipo: user.tipo });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, fillUserData, emptyUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
