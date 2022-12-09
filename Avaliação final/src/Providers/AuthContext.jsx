import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  function fillUserData({ token }) {
    localStorage.setItem("@authDentista", JSON.stringify({ token }));

    setUserData({ ...userData, token });
  }

  useEffect(() => {
    const res = localStorage.getItem("@authDentista");

    let user;

    if (res) {
      user = JSON.parse(res);

      fillUserData({ token: user.token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, fillUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
