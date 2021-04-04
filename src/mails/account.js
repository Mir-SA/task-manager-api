const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) => {
    sgMail
        .send({
            to: email,
            from: "kumarvij0202@gmail.com",
            subject: "Thank you for joining in",
            text: `Welcome to app, ${name}. Let us know how you like it`,
        })
        .then(() => {
            console.log("Email sent");
        })
        .catch((error) => {
            console.error(error);
        });
};

const sendCancellationMail = (email, name) => {
    sgMail
        .send({
            to: email,
            from: "kumarvij0202@gmail.com",
            subject: "Your Service Cancellation Request",
            text: `Goodbye, ${name}. Is there anything we can do, to improve, to get you onboard again?`,
        })
        .then(() => {
            console.log("Email sent");
        })
        .catch((error) => {
            console.error(error);
        });
};

module.exports = {
    sendWelcomeMail,
    sendCancellationMail,
};
