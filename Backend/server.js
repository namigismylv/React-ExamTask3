const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(cors())
app.use(express.json())
const foodsCategorySchema = mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true

    }
})
const foodsCategory = mongoose.model("foodsCategory", foodsCategorySchema)

app.get("/foods", async (req,res)=>{
    const target=await foodsCategory.find()
    res.send(target)
})
app.get("/foods/:id", async (req,res)=>{
    const {id} = req.params
    const target= await foodsCategory.findById(id)
    res.send(target)
})
app.delete("/foods/:id", async (req,res)=>{
    const {id} = req.params
    await foodsCategory.findByIdAndDelete(id)
    const target=await foodsCategory.find()
    res.send(target)
})
app.post("/foods", async (req,res)=>{
    const {title,image,desc} = req.body
    const newFoods= new foodsCategory({title:title,image:image,desc:desc})
    const target=await newFoods.save()
    res.send(target)
})
mongoose.connect("mongodb+srv://tu7ew05s4:NamiqNamiq@mongo.n5b9yhs.mongodb.net/").then(res => {
    console.log("db connected");
})
app.listen(7000, (req, res) => {
    console.log("server işə düşdü");
})