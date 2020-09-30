import React from "react";
import Button from "./Button";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>
      <input className="inputField" type='email' placeholder="Email"></input>
      <input className="inputField" type='password' placeholder="Password"></input>
      <Button>Log In</Button>
    </div>;
  }
}
