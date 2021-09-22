
const express=require("express")
const router=express.Router()
const Admin=require("../model/admin.model")
const transporter=require("../config/mail")

router.get("",async (req,res)=>{
    const page =+req.query.page || 1;
    const size =+req.query.size || 10;

    const offset=(page-1)*size;

    const admin=await Admin.find().skip(offset).limit(size).lean().exec()
    const totalDocument=await Admin.find().countDocuments();
    const totalPages=Math.ceil(totalDocument/size)

 await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments:[
        {
                filename:'dummy.txt',
                 path:'./src/myNewText.txt'
    }

    ]
  });

  
    return res.status(200).json({admin,totalPages})
})


router.post("", async (req, res) => {
  const admin = await Admin.create(req.body);
  
  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: `${user.email}`, // list of receivers
    subject: `Welcome to abc system${user.first_name}${user.last_name}`, // Subject line
    text: `hi ${user.first_name} please confirm your email`, // plain text body
    html: "<b>Hello world?</b>", // html body
    
  });
 
  return res.status(201).json({ admin });
});


module.exports=router;