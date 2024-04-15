import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewinTable = () => {
    var[data,setData] = useState([])
useEffect(()=>{
  axios.get("http://localhost:8080/view")
  .then((response)=>{
    console.log(response.data)
    setData(response.data)
    console.log(data)
  })
  .catch((err)=>console.log(err))
},[])
const deleteValue = (id)=>{
  console.log(id)
  axios.delete("http://localhost:8080/remove/"+id).
  then((response)=>{
    alert(response.data)
    window.location.reload(false)
  }).catch((err)=>console.log(err))

}
  return (
    <div>
      <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>6</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                {data.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell key={i}>{val.ename}</TableCell>
                                <TableCell key={i}>{val.esalary}</TableCell>
                                <TableCell key={i}>{val.eage}</TableCell>
                                <TableCell key={i}>{val.eposition}</TableCell>
                                <Button onClick={()=>deleteValue(val._id)}size="small" variant='contained' color='secondary'>
                                Delete
                                </Button>


                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewinTable
