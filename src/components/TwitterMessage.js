import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputMessage: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      inputMessage: e.target.value
    })
    
  }

  

  render() {
    return (
      <div>

        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value ={this.state.inputMessage} onChange={this.handleChange} /><br></br>


        <strong>Remaining Characters:</strong>{this.props.maxChars - this.state.inputMessage.length} <br></br>
      


      </div>
    );
  }
}

export default TwitterMessage;
