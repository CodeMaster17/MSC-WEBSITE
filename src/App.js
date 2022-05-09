import React from 'react';
import Navbar from './Events/Components/Navbar';
import Event from './Events/Events';
import Home from './homepage/home';
import About from './homepage/About';
import Project from './homepage/project';
import Leads from './homepage/leads';
import Organisation from './homepage/organisation';
import Process from './homepage/process';
import Events from './Events/Events.js';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Leads />
      <Process />
      <Organisation />
      <Events />
      <Projects />
    </div>
  );
}

export default App;
