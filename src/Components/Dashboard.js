import React from "react";
import Button from "./Button";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // Variables
  activePack = this.props.activePack;

  render() {
    return (
      <div>
        {this.activePack !== "" ? (
          <Button>+1 from active {`(` + this.activePack + `)`}</Button>
        ) : (
          <div></div>
        )}

        <Button>Choose active pack</Button>
        <Button>Add new pack</Button>
      </div>
    );
  }
}
