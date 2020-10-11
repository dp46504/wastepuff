import React from "react";
import Button from "./Button";

export default class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverUrl: this.props.serverUrl,
    };
    this.signInFunction = this.signInFunction.bind(this);
  }

  signInFunction = () => {
    const emailInputField = document.getElementById("emailInputField").value;
    const passwordInputField = document.getElementById("passwordInputField")
      .value;
    const repPasswordInputField = document.getElementById(
      "repPasswordInputField"
    ).value;
    // Zmienna, która sprawdza czy mail zawiera znak @
    let emailValid = emailInputField.includes("@");
    let passwordMatch =
      passwordInputField === repPasswordInputField ? true : false;

    if (emailValid && passwordMatch && !passwordInputField.includes("%")) {
      //  Jesli email posiada symbol @ i hasla sie zgadzają dodaj użytkownika do bazy
      const request = new XMLHttpRequest();
      const params = `?email=${encodeURIComponent(
        emailInputField
      )}&password=${encodeURIComponent(passwordInputField)}`;
      const endpoint = this.state.serverUrl + "signin" + params;

      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            alert(request.responseText);
          } else {
            alert(request.responseText);
          }
        }
      };

      request.open("GET", endpoint);
      request.send();
    } else {
      alert(
        "Email must contain @ symbol and password must match with each other and can't contain % symbol"
      );
    }
  };

  render() {
    return (
      <div>
        <input
          id="emailInputField"
          className="inputField"
          type="email"
          placeholder="Email"
        ></input>
        <input
          id="passwordInputField"
          className="inputField"
          type="password"
          placeholder="Password"
        ></input>
        <input
          id="repPasswordInputField"
          className="inputField"
          type="password"
          placeholder="Re-Enter Password"
        ></input>
        <div onClick={this.signInFunction}>
          <Button>Sign In</Button>
        </div>
      </div>
    );
  }
}
