import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      // handleLogin: props.handleLogin
      username: "",
      password: ""
    };
  }

  usernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(!this.state.username|| !this.state.password) return

    this.props.handleLogin(this.state)
  }
  
  

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text"
            value={this.state.username}
            onChange={event => this.usernameChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password"
            value={this.state.password}
            onChange={event=> this.passwordChange(event)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
