import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const authContext = React.createContext();

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) history.push("/home");
    });
  }, [user, history]);

  const value = { user, loading };

  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
};
