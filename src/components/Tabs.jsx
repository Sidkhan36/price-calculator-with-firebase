import React, { useContext } from 'react'
import CreateContext from '../CreateContext'
const Tabs = () => {
  const state = useContext(CreateContext)    
  console.log(state.tabs)
  return (
    <div className='btn btn-secondary'>
      {state.tabs.map(tab => <button key={tab.tab} className='btn btn-secondary '>{tab.tab}</button>)}
    </div>
  )
}

export default Tabs