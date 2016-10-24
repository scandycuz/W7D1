import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';

const preloadedState = {
  notes: []
};

const configureStore = (preloadedStateObj = preloadedState) => (
    createStore(rootReducer, preloadedStateObj)
);

export default configureStore;
