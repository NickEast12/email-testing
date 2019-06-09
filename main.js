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
// embedded javascript templating engine
    app.set('view engine', 'ejs');
// block 2
    // GET route to index
    app.get('/', (req, res) => {
      res.render('index');
    });
    // POST route from contact form
    app.post('/send-email', function (req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.yahoo.mail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'USERNAME',
        pass: 'PASSWORD'
      }
    });
    mailOpts = {
      from: req.body.name + '  ' + req.body.email + ' ',
      to: 'USERNAME',
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
app. listen
    app.listen(port, () => {
        console.log(`server started on port: ${port}`);
    });
