import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    const newMessage = event.target.value;
    this.setState({ value: newMessage });
  };

  handleCharLeft = () => {
    return this.props.maxChars - this.state.value.length;
  };

  render() {
    console.log(this.handleCharLeft());
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>Characters Left: {this.handleCharLeft()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
