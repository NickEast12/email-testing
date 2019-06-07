// require 
    const express = require('express')
    const nodeMailer = require('nodemailer');
    const bodyParser = require('body-parser');
    const port = 8080;
// block 1 
    const app = express();
// body parser
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(bodyParser.json());
// block 2
    // POST route from contact form
    app.post('/send-email', function (req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.yahoo.mail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'nick_east@yahoo.com',
        pass: 'Archie1998'
      }
    });
    mailOpts = {
      from: req.body.name + '  ' + req.body.email + ' ',
      to: 'nick_east@yahoo.com',
      subject: 'New Website Enquiry',
      text: `${req.body.name} (${req.body.email}) : ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
        res.render('message-failed');
      }
      else {
        res.render('message-sent');
      }
    });
    });
// app. listen
    // app.listen(port, () => {
    //     console.log(`server started on port: ${port}`);
    // });
