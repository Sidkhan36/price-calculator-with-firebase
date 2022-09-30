import './App.css';
import { Button } from '@mui/material';
import Form from './components/Form';
import { useReducer } from 'react';
import data from './components/data';
import CreateContext from './CreateContext';
import DispatchContext from './DispatchContext';

function dispatcher(state, action){
  switch(action.type){
    case 'INCREMENT':
        return {...state, words:state.words + 275, page:state.page + 1}
    case 'DECREMENT':
        return {...state,words:state.words - 275, page:state.page - 1}
    }
}
const initialState ={
  tabs:[{tab:"Writing"}, {tab:"ReWriting"}, {tab:"Editing"}],
  worktype: [
    'Essay(any type)',
    'Admission Essay',
    'Article Writing',
    'Article Review',
    'Movie Review',
    'Course Work',
    'Outline',
    'Marketing Plane',
    'Letters/Memos',
    'Case study',
    'Business Plan',
  ],
  page:1,
  words:275
}

function App() {
  const [state, dispatch] = useReducer(dispatcher, initialState)
  console.log(state)
  return (
    <DispatchContext.Provider value={dispatch}>
    <CreateContext.Provider value={state}>

    <div className="App">
      <Form/>
    </div>
    </CreateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
