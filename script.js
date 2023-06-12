const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', async (req, res) => {
  const { name, email, comment } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: 'your-sendgrid-username',
      pass: 'your-sendgrid-password'
    }
  });

  const mailOptions = {
    from: email,
    to: 'chetanrautinfinity@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
      <h3>New Contact Form Submission</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Comment: ${comment}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('Form submitted successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('An error occurred while submitting the form.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});