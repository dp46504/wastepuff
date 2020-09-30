import React from "react";
import "./App.css";
import Button from "./Components/Button";
import LoginForm from "./Components/LoginForm";
import SigninForm from "./Components/SigninForm";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let isLogged = false;
let activePack = "PallMall";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* GŁÓWNA STRONA */}
          <Route path="/" exact>
            {isLogged ? (
              // GDY ZALOGOWANY
              <Dashboard activePack={activePack}></Dashboard>
            ) : (
              // GDY NIEZALOGOWANY
              <div>
                <Link to="/login">
                  <Button>Log In</Button>
                </Link>
                <Link to="/signin">
                  <Button>Sign In</Button>
                </Link>
              </div>
            )}
          </Route>

          {/* EKRAN Z WYBOREM LOGOWANIA LUB REJESTRACJI */}

          {/* WYRENDEROWANIE FORMULARZA LOGOWANIA */}
          <Route path="/login" component={LoginForm}></Route>
          {/* WYRENDEROWANIE FORMULARZA REJESTRACJI */}
          <Route path="/signin" component={SigninForm}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
