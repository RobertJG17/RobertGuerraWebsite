import type { Component } from 'solid-js';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';

const App: Component = () => {
  // todo:
  // create header
  // create some basic animation

  return (
    <div>
      <Header />
      <Landing />
    </div>
  );
};

export default App;
