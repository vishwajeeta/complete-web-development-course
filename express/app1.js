const Express=require("express")
const app=Express()
const PORT=5000

app.set("view engine","ejs");

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})

app.get("/about",(req,res)=>{
    res.send("About")
})

app.get("/more",(req,res)=>{
    res.render("index")
})