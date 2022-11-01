import React from "react";
import './keyblack.css';
import './key.css';

class KeyBlack extends React.Component {
  render() {
    return (
      <div className="key keyblack">{this.props.name}</div>
    );
  }
}

export default KeyBlack;

