import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './Components/application/application';
import { Skills } from './Components/Skills/Skills';
function App() {
  return (
    <div className="App">
     {/* <Application/> */}
     
     <Skills skills={['HTML', 'CSS', 'JavaScript']} />
    </div>
  );
}

export default App;
