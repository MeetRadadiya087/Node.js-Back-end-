const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: "meetradadiya803@gmail.com",
        pass: "wurjiympmsjgybqa"
    }
});

module.exports.sendOtp = (to, otp) => {
    let mailoption = {
        from: "meetradadiya803@gmail.com",
        to: to,
        subject: "Your Password Reset OTP",
        text: `Your OTP is ${otp}`
    };
    transporter.sendMail(mailoption, (err, info) => {
        if (err) {
            console.log("Error sending OTP email:", err);
        } else {
            console.log("OTP email sent successfully:", info.response);
        }
    });
};