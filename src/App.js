import Users from "./Information/cards";
import "./styles.css";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }
  render() {
    return (
      <>
        <div class="header">
          <h1>LGMVIP Task-2</h1>
        </div>
        <div class="btn">
          <button className="fetchbtn" onClick={this.updateState}>Click To Fetch User Details</button>
        </div>
        <div class="container">
          <div class="userCard">
            <Users loading={this.state.loading} users={this.state.users_data} />
          </div>
        </div>
      </>
    );
  }
}
export default App;