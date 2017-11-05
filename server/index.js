/* eslint-env node */
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var request = require('superagent');
const keys = require('./config/keys');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/members', function (req, res) {
    request
        .post(`https://${keys.mailchimpInstance}.api.mailchimp.com/3.0/lists/${keys.listUniqueId}/members/`)
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + keys.mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.firstName,
            'LNAME': req.body.lastName
          }
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
              } else {
                res.send('Sign Up Failed :(');
              }
          });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
