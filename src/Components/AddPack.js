import React from "react";
import { withRouter } from "react-router";
import { StyledInput, StyledButton } from "../styles/Styles";
import { db_link } from "../Links";

class AddPack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addPack = this.addPack.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("jwt") == null) {
      this.props.history.push("../");
    }
  }

  addPack = () => {
    const packName = document.getElementById("packName").value;
    const packSize = document.getElementById("packSize").value;
    const packCost = document.getElementById("packCost").value;
    if (packName === "" || packSize === "" || packCost === "") {
      alert("All fields must be filled");
      return null;
    }
    fetch(db_link + "/addPack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        packName: packName,
        packSize: packSize,
        packCost: packCost,
      }),
    })
      .then((response) => {
        alert("Added Pack");
      })
      .catch(console.error());
  };
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <StyledInput id="packName" placeholder="Pack Name"></StyledInput>
        <StyledInput id="packSize" placeholder="Pack Size"></StyledInput>
        <StyledInput id="packCost" placeholder="Pack Cost"></StyledInput>
        <StyledButton onClick={this.addPack}>Add Pack</StyledButton>
        <StyledButton onClick={this.goBack}>Go back</StyledButton>
      </div>
    );
  }
}

export default withRouter(AddPack);
