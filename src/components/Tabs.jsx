import { Box, Button, ButtonBase, ButtonGroup, Tab } from '@mui/material'
import React from 'react'

const Tabs = () => {
    
  return (
    <div>
        <ButtonGroup sx={{backgroundColor:'gainsboro'}}>
           <Button variant='outlined'>Writing</Button>
           <Button variant='outlined'>Re-Writing</Button>
           <Button variant='outlined'>Editing</Button>
        </ButtonGroup>
    </div>
  )
}

export default Tabs