import React from "react";
import { StyledButton, StyledInput } from "../styles/Styles";
import { db_link } from "../Links";
import { withRouter } from "react-router";

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.signInFunction = this.signInFunction.bind(this);
  }
  componentWillMount() {
    if (localStorage.getItem("jwt")) {
      window.location.href = "../dashboard";
    }
  }

  signInFunction = async () => {
    const email = document.getElementById("emailInputField").value;
    const password = document.getElementById("passwordInputField").value;
    const repassword = document.getElementById("repPasswordInputField").value;

    if (password !== repassword) return alert("Password must match");

    fetch(db_link + "/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((resp) => {
      resp.text().then((result) => {
        alert(result);
      });
    });
  };

  goBack = () => {
    this.props.history.push("../");
  };

  render() {
    return (
      <div>
        <StyledInput
          id="emailInputField"
          type="email"
          placeholder="Email"
        ></StyledInput>
        <StyledInput
          id="passwordInputField"
          type="password"
          placeholder="Password"
        ></StyledInput>
        <StyledInput
          id="repPasswordInputField"
          type="password"
          placeholder="Re-Enter Password"
        ></StyledInput>
        <StyledButton onClick={this.signInFunction}>Sign In</StyledButton>
        <StyledButton onClick={this.goBack}>Log in</StyledButton>
      </div>
    );
  }
}
export default withRouter(SigninForm);
