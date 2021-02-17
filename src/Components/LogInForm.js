import {
  StyledSignInAnchor,
  StyledButton,
  StyledInput,
} from "../styles/Styles";
import { Link, Redirect } from "react-router-dom";
import React from "react";

export default class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logInFunction = this.logInFunction.bind(this);
  }

  async logInFunction() {
    const email = document.getElementById("emailField").value;
    const password = document.getElementById("passwordField").value;
    const url = "http://192.168.50.240:5000/login/";
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const token = rawResponse.headers.get("auth-token");
    if (token != null) {
      localStorage.setItem("jwt", token);
      window.location.href = "../";
    } else {
      rawResponse.text().then((result) => {
        alert(result);
      });
    }
  }
  render() {
    return (
      <div>
        <StyledInput
          id="emailField"
          className="inputField"
          type="email"
          placeholder="Email"
        ></StyledInput>
        <StyledInput
          id="passwordField"
          className="inputField"
          type="password"
          placeholder="Password"
        ></StyledInput>
        <StyledButton onClick={this.logInFunction}>Log in</StyledButton>

        <Link to="/signin">
          <StyledSignInAnchor>Sign In</StyledSignInAnchor>
        </Link>
      </div>
    );
  }
}
