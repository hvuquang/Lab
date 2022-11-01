import React from 'react';
import Octave from './octave';

class Piano extends React.Component {
  render() {
    return (
      <div className="piano">
        <Octave />
        <Octave />
        <Octave />
        <Octave />
        <Octave />
        <Octave />
        <Octave />
      </div>
    );
  }
}

export default Piano;
