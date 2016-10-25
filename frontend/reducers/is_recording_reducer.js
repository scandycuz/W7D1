import { START_RECORDING, STOP_RECORDING, ADD_NOTES } from '../actions/track_actions.js';

const recordingReducer = (oldState = false, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case START_RECORDING:
      return true;
    case STOP_RECORDING:
      return false;
    default:
      return oldState;
  }
};

export default recordingReducer;
