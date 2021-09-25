import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../context/authContext";

const Home = () => {
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    /* other func if user is there */
  }, [user, history]);

  const handleLoggedOut = async () => {
    await auth.signOut();
    history.push("/");
  };
  return (
    <div>
      <h5>home</h5>
      <button onClick={handleLoggedOut}>logout</button>
    </div>
  );
};

export default Home;
