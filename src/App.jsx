import React from 'react';
import Header from './Components/Header/Header';
import './assets/App.css'
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';

const App = () => {
  return (
    <div id='top' className='light app'>
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
    </div>
  );
};

export default App;