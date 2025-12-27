# Email-package-with-nodemailer

This npm package provides a set of functions for sending emails with attachments and image content.

## Installation

To install the package, run:

npm i email-package-with-nodemailer


Functions:

sendEmail(data): Sends an email with the provided data.

sendEmailWithAttachment(data): Sends an email with an attachment.

sendPlainTextEmail(data): Sends a plain text email.

sendEmailWithImageContent(data): Sends an email with image content embedded.


1: sendEmail(data)
Sends an email with the provided data.
Parameters
data (Object): An object containing the following properties:
user (String): The email address of the sender.
pass (String): The password of the sender's email account.
to (String): The recipient email address.
subject (String): The subject of the email.
text (String): The plain text content of the email.
html (String, optional): The HTML content of the email.


2: sendEmailWithAttachment(data)
Sends an email with an attachment.
Parameters
data (Object): An object containing the following properties:
user (String): The email address of the sender.
pass (String): The password of the sender's email account.
to (String): The recipient email address.
subject (String): The subject of the email.
text (String): The plain text content of the email.
html (String, optional): The HTML content of the email.
file (Object): An object representing the attachment file with properties originalname (String, the original name of the file) and path (String, the path to the file).


3: sendPlainTextEmail(data)
Sends a plain text email.
Parameters
data (Object): An object containing the following properties:
user (String): The email address of the sender.
pass (String): The password of the sender's email account.
to (String): The recipient email address.
subject (String): The subject of the email.
text (String): The plain text content of the email.


4: sendEmailWithImageContent(data)
Sends an email with image content embedded.
Parameters
data (Object): An object containing the following properties:
user (String): The email address of the sender.
pass (String): The password of the sender's email account.
to (String): The recipient email address.
subject (String): The subject of the email.
text (String): The plain text content of the email.
file (Object): An object representing the image file with properties originalname (String, the original name of the image) and path (String, the path to the image file).


Replace 'data' with the necessary parameters containing email details such as user, pass, to, subject, text, html, and file (if applicable).



License
This project is licensed under the ISC License.




This README.md provides a quick overview of your npm package, how to install it, how to use its functions, and its license information. Adjust it as needed to reflect any specific details or instructions for your package users.
