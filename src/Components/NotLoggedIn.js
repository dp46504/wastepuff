import React from "react";
import ErrorDialogBox from "./ErrorDialogBox";

export default class NotLoggedIn extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        
          <a href="/login"><ErrorDialogBox>Please Log In</ErrorDialogBox></a>
      </div>
    );
  }
}
