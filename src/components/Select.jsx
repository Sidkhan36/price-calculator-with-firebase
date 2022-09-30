import React, { useContext } from 'react'
import CreateContext from '../CreateContext'

const Select = () => {
  const state = useContext(CreateContext)
  const worktype = state.worktype
  // console.log(worktype)
  return (
    <div className='my-2'>
  <select className="form-select my-2'" >
    {worktype.map(type => <option key={type}>{type}</option>)}
   
  </select>
    </div>
  )
}

export default Select