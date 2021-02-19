import React from "react";
import { withRouter } from "react-router";
import SigninForm from "./Components/SigninForm";
import LogInForm from "./Components/LogInForm";
import Dashboard from "./Components/Dashboard";
import AddPack from "./Components/AddPack";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/Styles";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("jwt"),
    };
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Switch>
          <Route
            path="/"
            exact
            render={() =>
              this.state.token
                ? this.props.history.push("../dashboard")
                : this.props.history.push("../login")
            }
          />

          <Route path="/signin" component={SigninForm} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LogInForm} />
          <Route path="/addPack" component={AddPack} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
