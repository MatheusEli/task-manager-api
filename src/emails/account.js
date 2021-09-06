const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'matheuseli12@gmail.com',
        subject: 'thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodByeEmail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'matheuseli12@gmail.com',
        subject: 'you canceled your registration!',
        text: `Why did you cancel your registration? We are so sad...`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}