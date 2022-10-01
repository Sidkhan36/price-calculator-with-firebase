import React, { useContext } from 'react'
import OurContext from '../OurContext'

const CatandTime = () => {
  const state = useContext(OurContext)
  const timePeriod = state.gigs[0].timePeriod
  const almaMater = state.gigs[0].almaMater

  return (
    <div className='categandtime d-flex my-2'>
      <select className='form-select  mx-1'>
        {almaMater.map(worklevel => <option>{worklevel.level}</option>)}
        {/* {names.map(name => <option onClick={()=> console.log(name)} key={name}>{name}</option>)} */}
      </select>
      <select className='form-select  mx-1'>
        {timePeriod.map(period => <option>{period.duration}</option>)}
        {/* {time.map(time => <option onClick={()=> console.log(time)}key={time}>{time}</option>)} */}
      </select>
    </div>
  )
}

export default CatandTime