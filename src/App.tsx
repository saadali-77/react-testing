import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './Components/application/application';
import { Skills } from './Components/Skills/Skills';
import { Counter } from './Components/Counter/counter';
function App() {
  return (
    <div className="App">
     {/* <Application/> */}
     
     {/* <Skills skills={['HTML', 'CSS', 'JavaScript']} /> */}

    <Counter/>



    </div>
  );
}

export default App;
