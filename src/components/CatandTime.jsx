import React, { useContext } from 'react'
import OurContext from '../OurContext'

const CatandTime = () => {
  const {data} = useContext(OurContext)


  return (
    <div className='categandtime d-flex my-2'>
      <select className='form-select  mx-1'>
        {data[0].almaMater.map(level => <option key={level.level}>{level.level}</option>)}
      </select>
      <select className='form-select  mx-1'>
        {data[0].timePeriod.map(timetoTake => <option key={timetoTake.duration}>{timetoTake.duration}</option>)}
      </select>
    </div>
  )
}

export default CatandTime