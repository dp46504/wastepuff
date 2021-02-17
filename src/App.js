import React from "react";
import SigninForm from "./Components/SigninForm";
import LogInForm from "./Components/LogInForm";
import Dashboard from "./Components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { GlobalStyle } from "./styles/Styles";

function App() {
  return <Application></Application>;
}

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }

  componentWillMount() {
    this.setState({
      token: localStorage.getItem("jwt"),
    });
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          <Switch>
            {/* GŁÓWNA STRONA */}
            <Route
              path="/"
              exact
              render={() =>
                this.state.token ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            {/* EKRAN Z WYBOREM LOGOWANIA LUB REJESTRACJI */}
            {/* WYRENDEROWANIE FORMULARZA REJESTRACJI */}
            <Route path="/signin">
              <SigninForm></SigninForm>
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/login">
              <LogInForm />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
