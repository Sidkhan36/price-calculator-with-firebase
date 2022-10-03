import React, { useContext } from 'react'
import OurContext from '../OurContext'
const Tabs = () => {
  const {data} = useContext(OurContext)    
  // console.log(state.tabs)
  return (
    <div className='btn btn-secondary d-flex justify-content-around'>
      {data.map(tab => <a href='#' key={tab._id} className='btn btn-secondary'>{tab.gigName}</a>)}
    </div>
  )
}

export default Tabs