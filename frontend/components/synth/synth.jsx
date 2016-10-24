import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones.js';
import Note from '../../util/note.js';
import $ from 'jquery';

class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.notes = [];
    NOTE_NAMES.forEach( (noteName) => {
      let freq = TONES[noteName];
      this.notes.push(new Note(freq));
    });
  }

  onKeyDown(e) {
    
  }
  render() {
    return (
      <div>
        <ul>
          {this.notes.map( (note, idx) => (
            <li key={idx}>{note.frequency}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Synth;
