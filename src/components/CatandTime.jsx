import React from 'react'

const CatandTime = () => {
  const names=[
  'School',
  'College',
  'University',
  'Maters',
  'Doctorate']

  const time=[
  '6 Hours',
  '12 Hours',
  '1 Day',
  '2 Day',
  '3 Day']


  return (
    <div className='categandtime d-flex my-2'>
      <select className='form-select  mx-1'>
        {names.map(name => <option key={name}>{name}</option>)}
      </select>
      <select className='form-select  mx-1'>
        {time.map(time => <option key={time}>{time}</option>)}
      </select>
    </div>
  )
}

export default CatandTime