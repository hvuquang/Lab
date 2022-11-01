import React from "react";
import KeyWhite from "./keywhite";
import KeyBlack from "./keyblack";
import "./octave.css";

class Octave extends React.Component {
  render() {
    return (
      <div>
        <div className="octave">
          <KeyWhite data-note="C" name="1"></KeyWhite>
          <KeyBlack data-note="Db" name="z"></KeyBlack>
          <KeyWhite name="2"></KeyWhite>
          <KeyBlack name="x"></KeyBlack>
          <KeyWhite name="3"></KeyWhite>
          <KeyWhite name="4"></KeyWhite>
          <KeyBlack name="c"></KeyBlack>
          <KeyWhite name="5"></KeyWhite>
          <KeyBlack name="v"></KeyBlack>
          <KeyWhite name="6"></KeyWhite>
          <KeyBlack name="b"></KeyBlack>
          <KeyWhite name="7"></KeyWhite>
        </div>
      </div>
    );
  }
}

export default Octave;
