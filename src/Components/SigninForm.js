import React from "react";
import { StyledButton, StyledInput } from "../styles/Styles";

export default class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
        <StyledButton>Sign In</StyledButton>
      </div>
    );
  }
}
