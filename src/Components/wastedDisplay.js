import React from "react";
import { withRouter } from "react-router";
import { StyledWastedDisplay } from "../styles/Styles";

class WastedDisplay extends React.Component {
  render() {
    return (
      <div>
        <StyledWastedDisplay id="wastedDisplay">
          - {Number(this.props.wasted).toFixed(2)} PLN
        </StyledWastedDisplay>
      </div>
    );
  }
}

export default withRouter(WastedDisplay);
