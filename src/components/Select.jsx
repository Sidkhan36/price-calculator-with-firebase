import React, { useContext } from 'react'
import OurContext from '../OurContext'

const Select = () => {
  const state = useContext(OurContext)
  const gigTypeName = state.gigsType
  
  // console.log(worktype)
  return (
    <div className='my-2'>
  <select className="form-select my-2'" >
    {gigTypeName.map(gigtype => <option onClick={()=> console.log(gigtype.gigTypeName)}key={gigtype.gigTypeName}>{gigtype.gigTypeName}</option>)}
   
  </select>
    </div>
  )
}

export default Select