import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Note from './util/note.js';
import App from './components/app.jsx';
import Root from './components/root.jsx';

window.Note = Note;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(< Root store={store} />, rootEl);

  window.store = store;
});
