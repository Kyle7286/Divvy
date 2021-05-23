const transporter = require('../config/nodemailer');

module.exports = {
  sendEmail: async function (req, res) {
    console.log("sendEmail: ", req.body);
    try {
      let mailOptions = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.message,
      };
      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log("Email Sending Error " + err);
          res.status(500).json(err);
        } else {
          console.log("== Email Sent ==");
          res.status(200).json({message: 'Email sent'});
        }
      });
      // res.status(200).json(req.body);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
