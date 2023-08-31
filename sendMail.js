require('dotenv').config()
const nodemailer = require('nodemailer')

const sendMail = async (req, res) => {
  const { name, contact } = req.body
  const transporter = nodemailer.createTransport({
    service: "gmail",
    tls: {
      rejectUnauthorized: false
    },
    auth: {
      user: "shlok.garg01@gmail.com",
      pass: "tbqawpkqcunzwlol"
    }
  })
  
  console.log()
  transporter.sendMail({
    from: `"Shlok Garg" <shlok.garg01@gmail.com>`,
    to: "shlok.garg@1mg.com",
    subject: "Test Subject by S.G.",
    text: `NEW ORDER\nName: ${name}\nContact Number: ${contact}`
  }, (err, res) => {
    if (err) console.log("error", err)
    else console.log("res - ", res)
  })

  res.status(200).json({
    messgae: "Sent",
    status: 200
  })
}

const ping = (req, res) => {
  res.status(200).json({ message: "Server is running" })
}

module.exports = {
  sendMail, ping
}