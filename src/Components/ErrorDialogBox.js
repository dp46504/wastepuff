import React from "react";

export default class ErrorDialogBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="errorDialogBox">
        {this.props.children}
    </div>;
  }
}
