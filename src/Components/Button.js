import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="button" tabIndex="0">
            {this.props.children}
          </div>
    );
  }
}
