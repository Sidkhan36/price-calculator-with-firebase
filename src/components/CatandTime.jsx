import React, { useContext } from 'react'
import DispatchContext from '../DispatchContext'
import OurContext from '../OurContext'

const CatandTime = () => {
  const {data} = useContext(OurContext)
  const dispatch =useContext(DispatchContext)

  
  return (
    <div className='categandtime d-flex my-2'>
      <select className='form-select  mx-1'>
        {data[0].almaMater.map(level => <option onClick={()=> dispatch({type:"LEVEL", value:{level:level.level,levelPrice:level.levelPrice}})} key={level.level}>{level.level}</option>)}
      </select>
      <select className='form-select  mx-1'>
        {data[0].timePeriod.map(timetoTake => <option onClick={()=> dispatch({type:'TIME', value:{
            duration:timetoTake.duration,
            durationPrice:timetoTake.durationPrice
        }})} key={timetoTake.duration}>{timetoTake.duration}</option>)}
      </select>
    </div>
  )
}

export default CatandTime