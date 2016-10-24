import { combineReducers } from 'redux';
import { noteReducer } from './notes_reducer';

const rootReducer = combineReducers({ notes: noteReducer });

export default rootReducer;
