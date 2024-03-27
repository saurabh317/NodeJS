// how to send email to users using nodemailer

// ----------------summary------------------
// 1. import nodemailer
// 2. create an async function and create an variable using createTransport function
// 3. call the sendmail function on createdTransport function


// 1 import nodemailer
const nodemailer =  require('nodemailer');

// 2. configure email and send it
// sending  email is an asynchronous task

const sendMailUsingNodemailer = async () => {
  // 1. create an email transporter
  // emails are sent using SMTP (simple mail transfer protocol)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "saurabh@webrmedia.com",
      pass: 'sthdhoffmfaxqfuk'
    }
  })

  // 2. before sending the mail using transporter we have to specify the mail content
  const mailContent = {
    from: 'saurabh@webrmedia.com',
    to: 'saurabhsp317@gmail.com',
    subject: 'nodejs test',
    text: 'this email is genrated using nodejs'
  }

  // 3. sending email..........
  try {
    const result = await transporter.sendMail(mailContent)
    console.log("mail sent succesfully")
  } catch (err) {
    console.log("email cann't be sent", + err)
  }

}

sendMailUsingNodemailer()


