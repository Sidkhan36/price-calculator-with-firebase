import './App.css';
import { Button } from '@mui/material';
import Form from './components/Form';
import { useReducer } from 'react';
import data from './components/data';
import OurContext from './OurContext';
import DispatchContext from './DispatchContext';
import { initialState, dispatcher } from './reducer';


function App() {
  const [state, dispatch] = useReducer(dispatcher, initialState)
  console.log(state)
  return (
    <DispatchContext.Provider value={dispatch}>
    <OurContext.Provider value={state}>

    <div className="App">
      <Form/>
    </div>
    </OurContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
