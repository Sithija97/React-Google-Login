import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
