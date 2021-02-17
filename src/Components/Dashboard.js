import React from "react";
import { StyledButton } from "../styles/Styles";
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logOutFunction = this.logOutFunction.bind(this);
  }
  componentWillMount() {
    if (localStorage.getItem("jwt") == null) {
      window.location.href = "../";
    }
  }

  logOutFunction() {
    localStorage.removeItem("jwt");
    window.location.href = "../";
  }

  render() {
    return (
      <div>
        <StyledButton>+1 from active </StyledButton>
        <StyledButton>Choose active pack</StyledButton>
        <StyledButton>Add new pack</StyledButton>
        <StyledButton onClick={this.logOutFunction}>Log Out</StyledButton>
      </div>
    );
  }
}
