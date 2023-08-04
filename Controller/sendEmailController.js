const { request } = require("express");
const nodemailer=require("nodemailer")
const sendGridTransport=require("nodemailer-sendgrid-transport")

//transport
const transporter = nodemailer.createTransport(
    sendGridTransport({
      auth: {
        api_key: "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",
      },
    })
  );

const sendEmailController=(req,res)=>{
    try{
        const {name,email,msg}=req.body;

        if(!name || !email || !msg)
        {
            return res.status(500).send({
                success:false,
                message:"All fields are mandatory",
            })
        }

        transporter.sendMail({
            to:"mdshadab1301@gmail.com",
            from:"mdshadab1301@gmail.com",
            subject:"Regarding portfolio",
            html:`
            <h5>Detail Information</h5>
            <ul>
              <li><p>Name : ${name}</p></li>
              <li><p>Email : ${email}</p></li>
              <li><p>Message : ${msg}</p></li>
            </ul>
            `
        })
        return res.status(200).send({
            success:true,
            message:"Your Message Send Successfully",
            data:process.env.API_KEY2
        })


    }catch(err){
        res.status(500).send({
            success:false,
            message:"Email API Error",
            err:req.body
        })
    }
}



module.exports={sendEmailController}