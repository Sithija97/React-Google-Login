import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div>Login</div>
      <br />
      <div>
        <button onClick={handleLogIn}>Google</button>
      </div>
    </div>
  );
};

export default Login;
