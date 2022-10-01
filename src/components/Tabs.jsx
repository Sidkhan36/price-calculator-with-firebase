import React, { useContext } from 'react'
import OurContext from '../OurContext'
const Tabs = () => {
  const state = useContext(OurContext)    
  // console.log(state.tabs)
  return (
    <div className='btn btn-secondary'>
      {state.gigs.map(gig => <a href='#' key={gig._id} onClick={()=> console.log(gig._id, gig.gigName, gig.gigPrice)} className='btn btn-secondary '>{gig.gigName}</a>)}
    </div>
  )
}

export default Tabs