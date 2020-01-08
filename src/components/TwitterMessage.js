import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
  onChangeMessage = (event) => {
    this.setState({
      message: event.target.value
    })


  }

  render() {
    console.log(this.state.message)
    console.log(this.props)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.onChangeMessage}  value={this.state.message} id="message" />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
