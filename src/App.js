import React from "react";
import "./App.css";
import Button from "./Components/Button";
import SigninForm from "./Components/SigninForm";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return <Application></Application>;
}

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      userData: null,
      serverUrl: "http://192.168.50.240:5000/",
    };
    this.loginFunction = this.loginFunction.bind(this);
    this.logoutFunction = this.logoutFunction.bind(this);
  }
  // Funkcja Logująca i pobierająca dane z bazy danych
  loginFunction = () => {
    // Pobranie danych potrzebnych do logowania
    const emailFieldValue = document.getElementById("emailField").value;
    const passwordFieldValue = document.getElementById("passwordField").value;
    // zmienna przechowujaca informacje czy haslo zawiera symbol %
    const passwordValid = !passwordFieldValue.includes("%");
    // --------------------------------------------

    // Sprawdzenie czy hasło nie zawiera symbolu %, który spowoduje błąd przy dekodowaniu URI po stronie serwera
    if (
      passwordValid !== true ||
      emailFieldValue === "" ||
      passwordFieldValue === ""
    ) {
      alert(
        "Fields can't be empty. Check your password for containing % symbol. If it is, delete % symbol"
      );
      // --------------------------------------------

      // Jesli haslo nie zawiera symbolu % oraz oba pola nie są puste, tworze zapytanie \/
    } else {
      // Stworzenie zapytania oraz kodowanie URI wraz z jego konkatenacją
      const request = new XMLHttpRequest();

      const params = `?email=${encodeURIComponent(
        emailFieldValue
      )}&password=${encodeURIComponent(passwordFieldValue)}`;
      const endpoint = this.state.serverUrl +'login'+ params;
      // --------------------------------------

      // Gdy nadejdzie odpowiedz z serwera \/
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            // TODO Przechwyć userdata po pozytywnym wyszukaniu użytkownika w bazie dancyh
            this.setState({
              userData: JSON.parse(request.responseText),
              isLogged: true,
            });
          } else {
            alert(request.responseText);
          }
        }
      };
      // -------------------------------------

      // Wysłanie zapytania \/
      request.open("GET", endpoint);
      request.send();
      // -------------------------------------
    }
  };

  logoutFunction = () => {
    this.setState({
      isLogged: false,
      userData: null,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* GŁÓWNA STRONA */}
            <Route path="/" exact>
              {this.state.isLogged === true ? (
                // GDY ZALOGOWANY
                <Dashboard
                  logoutFunction={this.logoutFunction}
                  userData={this.state.userData[0]}
                ></Dashboard>
              ) : (
                // GDY NIEZALOGOWANY
                <div>
                  <input
                    id="emailField"
                    className="inputField"
                    type="email"
                    placeholder="Email"
                  ></input>
                  <input
                    id="passwordField"
                    className="inputField"
                    type="password"
                    placeholder="Password"
                  ></input>
                  <div onClick={this.loginFunction}>
                    <Button>Log in</Button>
                  </div>

                  <Link to="/signin">
                    <div id="signInAnchor">Sign In</div>
                  </Link>
                </div>
              )}
            </Route>

            {/* EKRAN Z WYBOREM LOGOWANIA LUB REJESTRACJI */}
            {/* WYRENDEROWANIE FORMULARZA REJESTRACJI */}
            <Route path="/signin">
              <SigninForm serverUrl={this.state.serverUrl}></SigninForm>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
