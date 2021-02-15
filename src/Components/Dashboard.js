import React from "react";
import { StyledButton } from "../styles/Styles";
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <StyledButton>+1 from active </StyledButton>
        <StyledButton>Choose active pack</StyledButton>
        <StyledButton>Add new pack</StyledButton>
        <StyledButton>Log Out</StyledButton>
      </div>
    );
  }
}
