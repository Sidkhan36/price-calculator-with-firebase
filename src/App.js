import './App.css';
import Form from './components/Form';
import { useEffect, useReducer, useState } from 'react';
import OurContext from './OurContext';
import DispatchContext from './DispatchContext';
import { initialState, dispatcher } from './reducer';
import data from './data'


function App() {
  const [state, dispatch] = useReducer(dispatcher, initialState)
  // const [gigWork, setGigWork]= useState({
  //   gigType:{id:'',typeName:'',gigtypePrice:''},
  //   page:1,
  //   words:275,
  //   time:'',
  //   level:'',
  //   totalPrice:'',
  // })
  console.log(state.gigWork)
  function submitHandle(e){
    e.preventDefault()
  }
  // function handleChange(e){
  //   const {value, name, type, checked} = e.target
  //   setGigWork(prevgigwork => {
  //     return{...prevgigwork,
  //       [name]: type === "checkbox"? checked: value
  //   }})
  // }
  // const [gdata, setData] = useState(data)
  // useEffect(() => {
  //   console.log(data)
    
  // }, [])
  
  return (
    <DispatchContext.Provider value={dispatch}>
    <OurContext.Provider value={{state,data}}>

    <div className="App">
      {/* <form onSubmit={submitHandle} style={{width:'300px'}}
            
            >
        {data.map(gigname => <button key={gigname._id} className='btn btn-secondary'>{gigname.gigName}</button>)}
        <select className='form-select'
        value={gigWork.gigType}
        onChange={handleChange}
        name="typeName">
          {data[0].gigType.map(gigtypename => <option key={gigtypename.id}>{gigtypename.gigTypeName}</option>)}
      
        </select>
      </form> */}
      <Form/>
    </div>
    </OurContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
