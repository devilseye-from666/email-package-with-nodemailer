import createTransporter from '../config/mailConfig.js';
import responseFormatter from '../utils/responseFormatter.js';
import fs from 'fs';

export const sendEmail = async ({ user, pass, to, subject, text, html }) => {
  const transporter = createTransporter(user, pass);

  try {
    const info = await transporter.sendMail({
      from: user,
      to,
      subject,
      text,
      html,
    });

    return responseFormatter(true, 'Email sent successfully', info);
  } catch (error) {
    return responseFormatter(false, 'Error sending email', error);
  }
};

export const sendEmailWithAttachment = async ({ user, pass, to, subject, text, html, file }) => {
  const transporter = createTransporter(user, pass);

  try {
    const mailOptions = {
      from: user,
      to,
      subject,
      text,
      html,
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);

    // Delete the file after sending the email
    // fs.unlinkSync(file.path);

    return responseFormatter(true, 'Email with attachment sent successfully', info);
  } catch (error) {
    return responseFormatter(false, 'Error sending email with attachment', error);
  }
};

export const sendPlainTextEmail = async ({ user, pass, to, subject, text }) => {
  const transporter = createTransporter(user, pass);

  try {
    const mailOptions = {
      from: user,
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);

    return responseFormatter(true, 'Plain text email sent successfully', info);
  } catch (error) {
    return responseFormatter(false, 'Error sending plain text email', error);
  }
};

export const sendEmailWithImageContent = async ({ user, pass, to, subject, text, file }) => {
  const transporter = createTransporter(user, pass);

  try {
    const mailOptions = {
      from: user,
      to,
      subject,
      text,
      html: `<p>${text}</p><img src="cid:unique@image.cid" />`,
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
          cid: 'unique@image.cid'
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);

    // Delete the file after sending the email
    // fs.unlinkSync(file.path);

    return responseFormatter(true, 'Email with image content sent successfully', info);
  } catch (error) {
    return responseFormatter(false, 'Error sending email with image content', error);
  }
};
