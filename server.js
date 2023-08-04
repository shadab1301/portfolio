const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const  portfolioRouter  = require("./routes/portfolioRouter")

dotenv.config();

const app=express()
app.use(cors())
app.use(express.json())

app.use("/api/v4/portfolio/",portfolioRouter)
// /api/v4/portfolio/sendEmail

const port=process.env.PORT || 9090;

app.listen(port,()=>{
    console.log(`Connection successful and running on ${port}`)
})