import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ""
    };
  }

  updateMessage = (event) =>{
    this.setState({
      message: event.target.value
    })
  }

  updateCount = () =>{
    this.props.maxChars = this.props.maxChars - 1
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.updateMessage(event)} value={this.state.message}/>
        <h2>{this.props.maxChars - this.state.message.length}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
