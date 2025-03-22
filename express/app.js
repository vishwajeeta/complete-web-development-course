const Express=require("express")
const app=Express()
const PORT=5000

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})
