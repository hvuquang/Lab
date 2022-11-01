import React from "react";
import KeyWhite from "./keywhite";
import KeyBlack from "./keyblack";
import "./octave.css";
import C_sound from "../notes/C.mp3";
import Db_sound from "../notes/Db.mp3";

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
        <audio src={C_sound} id="C" type="audio/mp3"></audio>
        <audio src="../notes/C.mp3" id="C" type="audio/mp3"></audio>
        <audio id="Db">
          <source src={Db_sound} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}

export default Octave;
