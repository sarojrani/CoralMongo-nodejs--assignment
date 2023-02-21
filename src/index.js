const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const UserModel=require('./Models/UserModel')
let ResturentModel=require('./Models/ResturentModel')

const app=express()
let port=process.env.port || 3000

app.use(bodyParser.json())

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://yogesh_beldar:Oh9CU4nZCayFGTeC@cluster0.zveoo.mongodb.net/saroj9955-db')
.then(()=>console.log("mongoDb is connected"))
.catch((err)=>console.log(err))

///---1st api-----firsttime any user visit--that api store dtail--------//
app.post('/signin',async(req,res)=>{
    let data=req.body;
    let creteData=await UserModel.create(data)
    return res.status(201).send({status:true,data:creteData})
})
/////---2nd api-----login-------//
app.post('/login',async(req,res)=>{
    let {email,password}=req.body;
    let getdata=await UserModel.findOne({email:email,password:password})
    if(!getdata){
    return res.status(400).send({status:true,data:"emial or password does not exists"})
    }
    return res.status(200).send({status:true,msg:"login succesfully"})
})
////---3rd api---giving deatil of resturent--getting only item ----//
app.post('/resturentList', async(req,res)=>{
    let data=req.body
    let detail=await ResturentModel.create(data) 
    return res.status(200).send({status:true,data:detail.item})

})
//////--detail of specifiac item-----//
app.get('/resturentlist/:item',async(req,res)=>{
    let item=req.params.item
    let list=await ResturentModel.findOne({item:item})
    
    const newInfo={
        Rname:list.Rname,
        address:list.address,
        description:list.description,
        review:list.review
    }
    return res.status(200).send({status:true,data:newInfo})

})


app.use('/',async(req,res)=>{
    res.send("app is working")
})
app.listen(port,(err)=>{
    if(!err){
    console.log("connecting to port")
    }
})