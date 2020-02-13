import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import ArtSearch from './containers/ArtSearchContainer';
import { art } from './reducers';
import { createStore } from 'redux';

const store = createStore(art);

store.subscribe(() => {
    console.table(store.getState());
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ArtSearch />
      </div>
    </Provider>
  );
}

export default App;
