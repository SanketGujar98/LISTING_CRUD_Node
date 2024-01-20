import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const str="mongodb+srv://mern:mern@cluster0.kszsw0k.mongodb.net/ToDoList?retryWrites=true&w=majority"

mongoose.connect(str)
.then(()=>{
    console.log("Connected SucessFully");
})
.catch((err)=>{
    console.log(err);
})

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
const port=8989;

const studentSchema=new mongoose.Schema({
    name:String,
    age:Number,
    course:String
})

const students=new mongoose.model("students",studentSchema)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/students",async (req,res)=>{
   
    const data= await students.find();
    res.send(data)
})

app.get("/students/:id",async(req,res)=>{
    const id=req.params.id;
    const data= await students.find({_id:id})
    res.send(data[0])
})

app.delete("/students/:id",async(req,res)=>{
    const id=req.params.id;
    const data=await students.deleteOne({_id:id})
    res.send(data)
})


app.post("/students",async(req,res)=>{

    let obj=new students(req.body)
    const datas=await obj.save();
    res.send(datas)

})

app.put("/students",async (req,res)=>{

    let data= await students.updateOne({_id:req.body._id},{
        "$set":{
            "name":req.body.name,
            "age":req.body.age,
            "course":req.body.course
        }
    })
    res.send(data)



})


app.listen(port,()=>{
    console.log(`Listining at port ${port}`);
})