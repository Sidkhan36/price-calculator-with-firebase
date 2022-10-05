import './App.css';
import Form from './components/Form';
import { useEffect, useReducer, useState } from 'react';
import OurContext from './OurContext';
import DispatchContext from './DispatchContext';
import { initialState, dispatcher } from './reducer';
import data from './data'


function App() {
  const [state, dispatch] = useReducer(dispatcher, initialState)
 
  console.log(state)
  
  return (
    <DispatchContext.Provider value={dispatch}>
    <OurContext.Provider value={{state,data}}>
    <div className="App">
      <Form/>
    </div>
    </OurContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
