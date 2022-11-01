import React from "react";
import './keywhite.css';
import './key.css';

class KeyWhite extends React.Component {
  render() {
    return (
      <div className="key keywhite">{this.props.name}</div>
      
    );
  }
}

export default KeyWhite;

