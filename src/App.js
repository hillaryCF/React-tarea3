import React from 'react';
import Characters from './services/fetch';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <p>Rick is a mentally gifted, but sociopathic and alcoholic scientist and a grandfather to Morty; an awkward, impressionable, and somewhat spineless teenage boy. Rick moves into the family home of Morty, where he immediately becomes a bad influence.</p>
      <Characters/>
    </div>
  );
}

export default App;
