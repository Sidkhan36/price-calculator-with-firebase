import React, { useContext } from 'react'
import DispatchContext from '../DispatchContext'
import OurContext from '../OurContext'
const Tabs = () => {
  const {data} = useContext(OurContext)   
  const dispatch = useContext(DispatchContext) 
  // console.log(state.)
  return (
    <div className='btn btn-secondary d-flex justify-content-around'>
      {data.tabs.map(tab => <button onClick={()=> dispatch({type:"TAB-SHIFT", value:{id:tab.id, tabName:tab.gigName, tabPrice:tab.startingPrice}})}key={tab.id} className='btn btn-secondary'>{tab.gigName}</button>)}
    </div>
  )
}

export default Tabs