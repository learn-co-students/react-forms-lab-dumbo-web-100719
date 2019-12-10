import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      savedMessage: ""
    };
  }

saveMessage = (event) => {
  this.setState({
    savedMessage: event.target.value
  })
}


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        onChange= {event => this.saveMessage(event)}
        value = {this.state.savedMessage}
        type="text" name="message" id="message" />
        <p>
          {280 - this.state.savedMessage.length} characters remaining
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
