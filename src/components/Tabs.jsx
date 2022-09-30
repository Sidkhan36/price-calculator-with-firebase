import React, { useContext } from 'react'
import OurContext from '../OurContext'
const Tabs = () => {
  const state = useContext(OurContext)    
  // console.log(state.tabs)
  return (
    <div className='btn btn-secondary'>
      {state.gigs.map(gig => <button key={gig._id} className='btn btn-secondary '>{gig.gigName}</button>)}
    </div>
  )
}

export default Tabs