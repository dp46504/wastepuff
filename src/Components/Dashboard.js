import React from "react";
import Button from "./Button";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
    };
    this.logoutFunction = this.logoutFunction.bind(this);
  }

  logoutFunction = this.props.logoutFunction;

  render() {
    return (
      <div>
        {this.state.userData.lastPack ? (
          <Button>+1 from active {`(${this.state.userData.lastPack})`}</Button>
        ) : (
          <div></div>
        )}

        <Button>Choose active pack</Button>
        <Button>Add new pack</Button>
        <div onClick={this.logoutFunction}><Button>Log Out</Button></div>
      </div>
    );
  }
}
