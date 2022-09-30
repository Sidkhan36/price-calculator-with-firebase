import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import React from 'react'

const CatandTime = () => {
    const [age, setAge] = React.useState('');
    const [week, setWeek] = React.useState('');
    
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const handleChange1 = (event) => {
      setWeek(event.target.value);
    };
  return (
    <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select size='small'
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>School</MenuItem>
          <MenuItem value={2}>College</MenuItem>
          <MenuItem value={3}>University</MenuItem>
          <MenuItem value={4}>Mater's</MenuItem>
          <MenuItem value={5}>Doctorate</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select size='small'
          value={week}
          onChange={handleChange1}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0.25}>6 Hours</MenuItem>
          <MenuItem value={0.5}>12 Hours</MenuItem>
          <MenuItem value={1}>1 Day</MenuItem>
          <MenuItem value={2}>2 Day</MenuItem>
          <MenuItem value={3}>3 Day</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  )
}

export default CatandTime