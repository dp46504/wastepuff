import React from "react";
import SigninForm from "./Components/SigninForm";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/Styles";

function App() {
  return <Application></Application>;
}

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <GlobalStyle></GlobalStyle>
        <Router>
          <Switch>
            {/* GŁÓWNA STRONA */}
            <Route path="/" exact>
              <Dashboard></Dashboard>
            </Route>

            {/* EKRAN Z WYBOREM LOGOWANIA LUB REJESTRACJI */}
            {/* WYRENDEROWANIE FORMULARZA REJESTRACJI */}
            <Route path="/signin">
              <SigninForm></SigninForm>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
