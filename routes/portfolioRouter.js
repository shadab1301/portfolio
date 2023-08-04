const express=require("express")
const { sendEmailController } = require("../Controller/sendEmailController")

const router=express.Router()


router.post("/sendEmail",sendEmailController)

module.exports=router