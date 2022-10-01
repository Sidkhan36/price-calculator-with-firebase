import React, { useContext } from 'react'
import Tabs from './Tabs'
import Select from './Select'
import './form.css'
import CatandTime from './CatandTime'
import PagesandWords from './PagesandWords'
import OurContext from '../OurContext'
const Form = () => {
  const state = useContext(OurContext)
  let gigStartingPrice = state.gigs[0].startingPrice
  // const gigTypeName = state.gigs[0].gigType
  const timePeriod = state.gigs[0].timePeriod
  const almaMater = state.gigs[0].almaMater
  // let gigType = state.gigs[0].gigType
  // console.log(gigStartingPrice)
  console.log(state)
  // const gigprice = state.gigs.map(gigprice => console.log(gigprice.gigPrice))
  // console.log(gigprice)
  function submitHandler(e){
    e.preventDefault()
  }
  return (
    <div className='form'>
      <h3 style={{textAlign:'start', padding:'10px'}}>Calculate the Price</h3>
         {/* {state.gigs.map((gig )=> (
           <form>
            <button className='btn btn-secondary'>{gig.gigName}</button>
            <select className='form-select my-2'>
              {gig.gigType.map(gigtypename => <option value={gigtypename.id}onClick={()=> console.log(gigtypename.gigTypeName)}>{gigtypename.gigTypeName}</option>)}
            </select>
            <section className='d-flex'>
            <select className='form-select'>
              {gig.almaMater.map(worklevel => <option>{worklevel.level}</option>)}
            </select>
            <select className='form-select'>
              {gig.timePeriod.map(duration => <option value={duration.durationPrice}>{duration.duration}</option>)}
            </select>
            </section>

            <h4>${gig.startingPrice}</h4>
        <div className="d-grid gap-2">
      <button className="btn btn-primary" type="button">Write My Paper</button>
      </div>
         </form>
         ))} */}
      {/* <form onSubmit={submitHandler}>

      <select className="form-select my-2'" >
    {gigTypeName.map(gigtypename => <option onClick={()=> console.log(gigtypename.gigTypeName)}>{gigtypename.gigTypeName}</option>)}
    
  </select>
  <div className='categandtime d-flex my-2'>
      <select className='form-select  mx-1'>
        {almaMater.map(worklevel => <option>{worklevel.level}</option>)}
      </select>
      <select className='form-select  mx-1'>
        {timePeriod.map(period => <option>{period.duration}</option>)}
      </select>
    </div> */}
    <form onSubmit={submitHandler}>
        <Tabs/>
        <Select/>
        <CatandTime/>
        <PagesandWords/>
       
      <div className='d-flex'>

       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Double spaces
  </label>
       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Single space
  </label>
      </div>

        <h4>${}</h4>
        <div className="d-grid gap-2">
      <button className="btn btn-primary" type="button">Write My Paper</button>
</div>
          </form>
    </div>
  )
}

export default Form