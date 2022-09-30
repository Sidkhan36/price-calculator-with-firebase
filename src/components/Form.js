import React from 'react'
import Tabs from './Tabs'
import Select from './Select'
import './form.css'
import CatandTime from './CatandTime'
import PagesandWords from './PagesandWords'
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material'
const Form = () => {
  return (
    <div className='form'>
      <h3 style={{textAlign:'start'}}>Calculate the Price</h3>
      <form>

        <Tabs/>
        <Select/>
        <CatandTime/>
        <PagesandWords/>
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        >
        <FormControlLabel value="female" control={<Radio />} label="Double Spaces" />
        <FormControlLabel value="male" control={<Radio />} label="Single Spaces" />
      </RadioGroup>
        <h4>$ 6.3</h4>
        <Button variant='contained' size='large'>Write My Paper</Button>
          </form>
    </div>
  )
}

export default Form