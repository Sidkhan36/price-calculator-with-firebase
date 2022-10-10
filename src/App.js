import './App.css';
import Form from './components/Form';
import { useEffect, useReducer, useState } from 'react';
import OurContext from './OurContext';
import DispatchContext from './DispatchContext';
import { initialState, dispatcher } from './reducer';
import LogIn from './pages/LogIn';
import data from './data'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  const [state, dispatch] = useReducer(dispatcher, initialState)
 
  // console.log(state)
  return (
    <DispatchContext.Provider value={dispatch}>
    <OurContext.Provider value={{state,data}}>
    <BrowserRouter>
    <div className="App">
    </div>
    <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="login" element={<LogIn />} /> 
      </Routes>
    </BrowserRouter>
    </OurContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;