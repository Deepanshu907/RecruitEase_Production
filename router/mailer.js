import nodemailer from 'nodemailer';

const mailer = async (mailContent, email) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"RecruitEase Team" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'RecruitEase Password Reset Link',
    html: mailContent,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId);
  return info;
};

export default mailer;
