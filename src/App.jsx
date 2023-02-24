import React from 'react';
import {UseStateInput,UseStateTest} from '../src/components/hooks/UseStateTest.jsx';
import Seperator from './components/Seperator.jsx';

// import './App.css';
function App() {
  return (
    <div className="App">
      <UseStateTest/>
      <Seperator/>
      <UseStateInput/>
      
    </div>
  );
}

export default App;
