import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions.js';
import { NOTE_NAMES } from '../util/tones';

export const noteReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case KEY_PRESSED:
      if (NOTE_NAMES.includes(action.key)) {
        return [...oldState, action.key];
      } else {
        return oldState;
      }
    case KEY_RELEASED:
      if (NOTE_NAMES.includes(action.key)) {
        if (oldState.includes(action.key)) {
          let keyIndex = oldState.indexOf(action.key);
          let part1 = oldState.slice(0, keyIndex);
          let part2 = oldState.slice(keyIndex + 1);
          return part1.concat(part2);
        } else {
          return oldState;
        }
      } else {
        return oldState;
      }
    default:
      return oldState;
  }
};
