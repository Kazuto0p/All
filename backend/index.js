// 1.import the express
const express =require('express')
const EmployeeModel=require('./models')
const cors =require('cors')


// 2

const app=new express()

// middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

// 3.create the api
app.get('/',(req,res)=>{
    res.send("Message from server")
})
app.get('/trial',(req,res)=>{
    res.send("trial3")
})

// api to add data to db
app.post('/add',async(req,res)=>{
    const result=await new EmployeeModel(req.body);
    result.save();
    res.send("data added")
})
// api to view data from db
app.get('/view',async(req,res)=>{
    let result=await EmployeeModel.find();
    res.json(result);
})

// delete




// 4.create a localhost port
app.listen(8080,()=>{
    console.log("port is running at 8000")
})