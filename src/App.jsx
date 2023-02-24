import React from 'react';
import {UseStateInput,UseStateTest} from '../src/components/hooks/UseStateTest.jsx';
import UseEffectTest from './components/hooks/UseEffectTest.jsx';
import UseRefTest from './components/hooks/UseRefTest.jsx';
import Seperator from './components/Seperator.jsx';

// import './App.css';
function App() {
  return (
    <div className="App">
      <UseStateTest/>
      <Seperator/>
      <UseStateInput/>
      <Seperator/>
      <UseEffectTest/>
      <Seperator/>
      <UseRefTest/>
      <Seperator/>
    </div>
  );
}

export default App;
