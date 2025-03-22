const Express=require("express")
const app=Express()
const PORT=5000

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`)
})
