import nodemailer from 'nodemailer';

const createTransporter = (user, pass) => {
  return nodemailer.createTransport({
    // Configure transporter based on provided user and pass
    // You may also need to add host, port, etc. based on your requirements
    // For simplicity, I'm using a basic configuration
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });
};

export default createTransporter;
