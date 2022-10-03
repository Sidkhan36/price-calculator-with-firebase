import React, { useContext, useState } from 'react'
import DispatchContext from '../DispatchContext'
import OurContext from '../OurContext'

const Select = () => {
  const {data, state} = useContext(OurContext)
  const dispatch = useContext(DispatchContext)
  // const [select, setSelect]= useState('')
  // console.log(state.select)
  // console.log(worktype)
  console.log(data)
  // function handlechange(e){
  //   setSelect(e.target.value)
  // }
  
  return (
    <div className='my-2'>
  <select className="form-select my-2"
          // value={select}
          // onChange={handlechange}
          name="select">
            {data[0].gigType.map(gigtypename => <option onClick={()=> dispatch(
              {type:'SELECT',value:{id:gigtypename.id,
                gigTypeName:gigtypename.gigTypeName,
                                    gigTypePrice:gigtypename.gigTypePrice
              }})}key={gigtypename.id}>{gigtypename.gigTypeName}</option>)}
  </select>
    </div>
  )
}

export default Select