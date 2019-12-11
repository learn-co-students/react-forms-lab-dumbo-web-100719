import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // maxChars: "props.maxChars",
      message: ""
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      // maxChars: maxChars- event.target.value,
      message: event.target.value
    })
  }
  

  render() {
    // console.log(maxChars)
    return (
      <div>message
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message}
        onChange={event => this.handleMessageChange(event)} />
        {this.props.maxChars- this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
