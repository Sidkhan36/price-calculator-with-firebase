import React from 'react'
import Tabs from './Tabs'
import Select from './Select'
import './form.css'
import CatandTime from './CatandTime'
import PagesandWords from './PagesandWords'
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material'
const Form = () => {
  function submitHandler(e){
    e.preventDefault()
  }
  return (
    <div className='form'>
      <h3 style={{textAlign:'start', padding:'10px'}}>Calculate the Price</h3>
      <form onSubmit={submitHandler}>

        <Tabs/>
        <Select/>
        <CatandTime/>
        <PagesandWords/>
        {/* <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        >
        <FormControlLabel value="female" control={<Radio />} label="Double Spaces" />
        <FormControlLabel value="male" control={<Radio />} label="Single Spaces" />
      </RadioGroup> */}
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

        <h4>$ 6.3</h4>
        <div className="d-grid gap-2">
      <button className="btn btn-primary" type="button">Write My Paper</button>
</div>
          </form>
    </div>
  )
}

export default Form