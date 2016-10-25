import React from 'react';

const NoteKey = ({ note, pressed, idx }) => (
  <li className={pressed} >{note.name}</li>
);

export default NoteKey;
