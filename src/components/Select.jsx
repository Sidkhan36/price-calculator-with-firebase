import React, { useContext } from 'react'
import OurContext from '../OurContext'

const Select = () => {
  const state = useContext(OurContext)
  const gigTypeName = state.gigs[0].gigType
  
  // console.log(worktype)
  return (
    <div className='my-2'>
  <select className="form-select my-2'" >
    {gigTypeName.map(gigtypename => <option onClick={()=> console.log(gigtypename.gigTypeName)}>{gigtypename.gigTypeName}</option>)}
    {/* {gigTypeName.map(gigtype => <option onClick={()=> console.log(gigtype.gigTypeName)}key={gigtype.gigTypeName}>{gigtype.gigTypeName}</option>)} */}
   
  </select>
    </div>
  )
}

export default Select