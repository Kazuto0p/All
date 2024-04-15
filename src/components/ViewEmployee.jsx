import { Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ViewEmployee = () => {
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
        <div style={{margin:'4%'}}>
  <Grid container spacing={2}>
      {data.map((val,i)=>(
      <Grid item xs={12} sm={6} md={4} key={i}>
          <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant='h5' gutterBottom>
           Employee Name : {val.ename}
          </Typography>
          <Typography variant='h6'>
          Age : {val.eage}
          </Typography>
          <Typography variant='h6'>
          Position : {val.eposition}
          </Typography>
          <Typography variant='h6'>
          Salary : {val.esalary}
            <br />
           
          </Typography>
        </CardContent>
        <CardActions>
          <Button
          onClick={()=>deleteValue(val._id)}
          size="small" variant='contained' color='secondary'>
            Delete
            </Button>
          <Button size="small" variant='contained' color='secondary'>Update</Button>
        </CardActions>
      </Card>
        </Grid>
))}
  </Grid>
    </div>
  )
}

export default ViewEmployee