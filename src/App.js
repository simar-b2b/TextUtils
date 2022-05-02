import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <> 
      <Navbar title="TextUtlis"  mode={mode} toggleMode={toggleMode}/>

      <Routes>

      <Route path="/" element={<TextForm mode={mode} />}>
      </Route>

      <Route path="/about" element={<About mode={mode}/>}>
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
