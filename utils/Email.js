const htmlToText = require('html-to-text');
const nodemailer = require('nodemailer');
const pug = require('pug');

class Email {
  constructor(user, url) {
    this.to = user.email;
    this.name = user.name;
    this.url = url;
    this.from = `Seif Allah <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      //SendGrid
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  //Send the actual email
  async send(template, subject) {
    // Render HTML base on pug template
    const html = pug.renderFile(`${__dirname}/../emails/${template}.pug`, {
      name: this.name,
      url: this.url,
      subject,
    });
    //Define email options
    const mailOption = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
      //HTML
    };
    // Create a transport and send email
    await this.newTransport().sendMail(mailOption);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the NodeJs Family');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset Token (Valid for only 10 minutes)'
    );
  }
}

module.exports = Email;
