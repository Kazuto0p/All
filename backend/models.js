const mongoose= require("mongoose")

mongoose.connect("mongodb+srv://umamahesh9447230:kazuto14@cluster0.eoieac4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))
let mongoSchema=mongoose.Schema
const EmployeeSchema= new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})
var EmployeeModel=mongoose.model("Employee",EmployeeSchema)
module.exports=EmployeeModel