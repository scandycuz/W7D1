import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones.js';
import Note from '../../util/note.js';
import { keyPressed, keyReleased } from '../../actions/notes_actions';
import NoteKey from './note_key';
import $ from 'jquery';

class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.notes = [];
    NOTE_NAMES.forEach( (noteName) => {
      let freq = TONES[noteName];
      this.notes.push(new Note(noteName, freq));
    });

    this.playNotes = this.playNotes.bind(this);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    let currentKey = e.key;
    this.props.keyPressed(currentKey);
  }

  onKeyUp(e) {
    let currentKey = e.key;
    this.props.keyReleased(currentKey);
  }

  playNotes() {
    let playNotes = (callback) => {
      let frequenciesArr = this.props.notes.map((noteKey) => TONES[noteKey]);
      callback(frequenciesArr);
    };

    let checkNotes = (frequencies) => {
      this.notes.forEach( (note) => {
        if (frequencies.includes(note.frequency)) {
          note.start();
        } else {
          note.stop();
        }
      });
    };

    playNotes(checkNotes);

  }

  render() {
    this.playNotes();

    return (
        <ul>
          {this.notes.map( (note, idx) => (
            < NoteKey key={idx} note={note} pressed={false} idx={idx} />
          ))}
        </ul>
    );
  }
}

export default Synth;
