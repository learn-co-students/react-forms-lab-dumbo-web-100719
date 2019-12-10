import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  // storeUn = (event) => {
  //   event.preventDefault()
  //   this.setState ({
  //     username: event.target.value
  //   }, console.log("happened"))
  // }

  // storePw = (event) => {
  //   event.preventDefault()
  //   this.setState ({
  //     password: event.target.value
  //   })
  // }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  

  checkFields = (event) => {
    event.preventDefault()
    if(this.state.username && this.state.password){
      this.props.handleLogin(this.state)
    }else {
      console.log("Sad Hami Brows")
    }
  }
  
  

  render() {
    return (
      <form onSubmit = {(event) => this.checkFields(event)}>
        <div>
          <label>
            Username
            <input
     id="username"
     type="text"
     name="username"
     value={this.state.username}
     onChange={(event) => this.handleChange(event)}
   />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            value = {this.state.password}
            onChange = {(event) => this.handleChange(event)}
            />
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
