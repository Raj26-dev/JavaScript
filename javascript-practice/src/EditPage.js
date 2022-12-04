import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';


const EditPage = () => {
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Typography>Edit Page</Typography>
      <TextField label="Tital" variant="filled" /><br/>
      <TextField label="Description" variant="filled" />
      {/* <TextField label="Tital" variant="filled" /> */}
    </Box>
    </div>
  )
}

export default EditPage
