import {Request, Response} from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

// Email sending route
export const recoverEmail = async(req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email address is required' });
  }

  // Create a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL, // Your Gmail email address
      pass: PASSWORD // Your Gmail password
    }
  });

  // Email options
  const mailOptions = {
    from: 'your_email@gmail.com', // Your Gmail email address
    to: email,
    subject: '',
    text: ''
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  });
};


