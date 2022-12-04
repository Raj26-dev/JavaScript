import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



const Home = () => {
    const navigate = useNavigate();

    const [getData, setGetData] = useState([])
    const [isEdit, setIsEdit] = useState(false);
    const [inputData, setInputData] = useState({
        tital: "",
        description: ""
    })
    const [editId, setEditId] = useState(0)

    useEffect(() => {
        const getLocalStorage = localStorage.getItem("InputData");
        setGetData(JSON.parse(getLocalStorage));
    }, [])

    const onClickNav = () => {
        navigate("/");
    }

    const handelDel=(indexOuter)=> {
     const delFun =   getData.filter((alue, index)=>{
          return  index !== indexOuter ? getData : null
        })
        setGetData(getData.filter((alue, index)=>{
            return  index !== indexOuter ? getData : null
          }));
        localStorage.setItem("InputData", JSON.stringify(delFun))
    }
    const inputHandler = (e) => {
        const { name, value } = e.target;

        setInputData({
            ...inputData,
            [name]: value,
        });
    }

    const handelEdit=(id)=>{
        setIsEdit(!isEdit);
        setEditId(id)
        localStorage.setItem("editId", id)
    }

    const handelEditUpdate =()=> {
        const {tital, description}= inputData
        const getLocalStorage = localStorage.getItem('InputData') && localStorage.getItem('InputData').length > 0 ? JSON.parse(localStorage.getItem('InputData')) : [];
        const delFun =   getData.map((alue, index)=>{
            return  index == localStorage.getItem("editId") ? {tital, description} : alue
          })
          localStorage.setItem("InputData",JSON.stringify(delFun))
          setIsEdit(false)
    }
    return (
        <div>
            <h3>Home Page</h3>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Tital</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getData && getData.length > 0 ? getData.map((row, index) => (
                            <StyledTableRow key={index}>
                                {isEdit &&  editId === index ?  <TextField value={inputData.tital} name="tital" label="Tital" variant="filled" onChange={inputHandler} /> :<StyledTableCell align="center">
                                    {row.tital}
                                </StyledTableCell>}

                              {isEdit && editId === index ? <TextField value={inputData.description} name="description" label="Description" variant="filled" onChange={inputHandler} /> :  <StyledTableCell align="center">{row.description}</StyledTableCell>}
                                <Button color='primary' onClick={()=> handelDel(index)}> <DeleteIcon /> </Button>
                              {isEdit? <Button onClick={handelEditUpdate}><AddBoxIcon/></Button> :  <Button onClick={()=>handelEdit(index)}><EditIcon/></Button>}
                            </StyledTableRow>
                        )) : "No Data Found"}
                    </TableBody>
                </Table>
            </TableContainer>

            <br />
            <div>
                <Button variant='contained' onClick={onClickNav}>Go To Add Page</Button>
            </div>
        </div>
    )
}

export default Home

