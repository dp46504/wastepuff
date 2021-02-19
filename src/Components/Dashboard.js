import React from "react";
import { withRouter } from "react-router";
import { StyledButton } from "../styles/Styles";
import WastedDisplay from "./wastedDisplay";
import { db_link } from "../Links";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packName: null,
      packSize: null,
      wasted: null,
    };
    this.logOutFunction = this.logOutFunction.bind(this);
    this.getData = this.getData.bind(this);
  }
  async componentDidMount() {
    if (localStorage.getItem("jwt") == null) {
      this.props.history.push("../");
    } else {
      this.getData();
    }
  }

  getData = async () => {
    // Get user data
    await fetch(db_link + "/getdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("jwt"),
      },
    })
      .then((result) => {
        result.text().then((response) => {
          this.setState({
            packName: JSON.parse(response).name,
            packSize: JSON.parse(response).size,
            wasted: JSON.parse(response).wasted,
          });
        });
      })
      .catch((error) => console.log(error));
  };

  async logOutFunction() {
    await localStorage.removeItem("jwt");
    this.props.history.push("../");
  }

  minusOne = async () => {
    await fetch(db_link + "/minusone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("jwt"),
      },
    }).then((res) => {
      res.text().then((result) => console.log(result));
    });
    this.getData();
  };

  goToAddPack = () => {
    this.props.history.push("../addpack");
  };

  render() {
    return (
      <div>
        <WastedDisplay wasted={this.state.wasted} />
        {this.state.packName ? (
          <StyledButton onClick={this.minusOne}>
            -1 {this.state.packName} ({this.state.packSize} left)
          </StyledButton>
        ) : null}

        <StyledButton onClick={this.goToAddPack}>Add new pack</StyledButton>
        <StyledButton onClick={this.logOutFunction}>Log Out</StyledButton>
      </div>
    );
  }
}
export default withRouter(Dashboard);
