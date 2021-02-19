import {
  StyledSignInAnchor,
  StyledButton,
  StyledInput,
} from "../styles/Styles";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import React from "react";
import { db_link } from "../Links";

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logInFunction = this.logInFunction.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.props.history.push("../dashboard");
    }
  }

  async logInFunction() {
    const email = document.getElementById("emailField").value;
    const password = document.getElementById("passwordField").value;
    const url = db_link + "/login/";
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
      this.props.history.push("../dashboard");
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

export default withRouter(LogInForm);
