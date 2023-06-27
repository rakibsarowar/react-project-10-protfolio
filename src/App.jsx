import React from 'react';
import Header from './Components/Header/Header';
import './assets/App.css'
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';

const App = () => {
  return (
    <div id='top' className='light app'>
      <Header></Header>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default App;