const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "497cad3f452787", // generated ethereal user
      pass: "d7863692fc5781", // generated ethereal password
    },
  });

  module.exports=transporter