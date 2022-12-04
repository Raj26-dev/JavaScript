import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const AddPage = () => {
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        tital: "",
        description: ""
    })
    const [newData, setNewData] = useState([])

    const inputHandler = (e) => {
        const { name, value } = e.target;

        setInputData({
            ...inputData,
            [name]: value,
        });
    }

    const handalInputSend = () => {
        console.log(inputData);
        setNewData([...newData, inputData]);
        const localBlog =JSON.parse( localStorage.getItem("InputData")) || []
        localStorage.setItem("InputData", JSON.stringify([...localBlog, inputData]))
        // console.log(newData);

        setInputData({
            tital: "",
            description: ""
        });

        navigate("/home")

    }
    console.log(newData);
    return (

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography>Add Page</Typography>
            <TextField value={inputData.tital} name="tital" label="Tital" variant="filled" onChange={inputHandler} /><br />
            <TextField value={inputData.description} name="description" label="Description" variant="filled" onChange={inputHandler} /><br />
            <Button variant='contained' onClick={handalInputSend}>Submit</Button>
        </Box>

    )
}

export default AddPage
