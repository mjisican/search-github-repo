import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Button extends Component {
  render() {
    return (
      <TextField hintText="Enter Repo Name/Keyword" onChange={this.props.onChange}/>
    );
  }
}

export default Button;
