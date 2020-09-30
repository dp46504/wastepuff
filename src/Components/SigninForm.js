import React from "react";
import Button from "./Button";

export default class SigninForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>
      <input className="inputField" type='email' placeholder="Email"></input>
      <input className="inputField" type='password' placeholder="Password"></input>
      <input className="inputField" type='password' placeholder="Re-Enter Password"></input>
      <Button>Sign In</Button>
    </div>;
  }
}
