import { START_RECORDING, STOP_RECORDING, ADD_NOTES } from '../actions/track_actions.js';
import { merge } from 'lodash/merge';

let currTrackId = 0;

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case START_RECORDING:
      currTrackId++;
      let newTrack = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      newState[currTrackId] = newTrack;
      return newState;
    case STOP_RECORDING:
      let currentTrack = newState[currTrackId];

      let updatedTrack = {
        id: currentTrack.id,
        name: currentTrack.name,
        roll: currentTrack.roll.push({ notes: [], timeSlice: action.timeNow - currentTrack.timeStart})
      };
      newState[currTrackId] = merge(currentTrack, updatedTrack);
      return newState;
    case ADD_NOTES:
      let currentTrack = newState[currTrackId];

      let updatedTrack = {
        id: currentTrack.id,
        name: currentTrack.name,
        roll: currentTrack.roll.push({ notes: action.notes, timeSlice: action.timeNow - currentTrack.timeStart})
      };
      newState[currTrackId] = merge(currentTrack, updatedTrack);
      return newState;
    default:
     return oldState;
  }
};

export default tracksReducer;
