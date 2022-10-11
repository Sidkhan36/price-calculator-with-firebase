import './App.css';
import Form from './components/Form';
import { useEffect, useReducer, useState } from 'react';
import OurContext from './OurContext';
import DispatchContext from './DispatchContext';
import { initialState, dispatcher } from './reducer';
import LogIn from './pages/Login';
import data from './data'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';


function App() {
  const [state, dispatch] = useReducer(dispatcher, initialState)
 
  // console.log(state)
  return (
    <DispatchContext.Provider value={dispatch}>
    <OurContext.Provider value={{state,data}}>
  
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LogIn />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
    </OurContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;