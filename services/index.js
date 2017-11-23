/* eslint-env node */
'use strict';

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

var express = require('express');
var bodyParser = require('body-parser');
var request = require('superagent');
const keys = require('./config/keys');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(allowCrossDomain);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/members', function (req, res) {

  console.log("Request URL: ", `https://${keys.mailchimpInstance}.api.mailchimp.com/3.0/lists/${keys.listUniqueId}/members/`);
  console.log("/req.body.member/: ", req.body.member);
    request
        .post(`https://${keys.mailchimpInstance}.api.mailchimp.com/3.0/lists/${keys.mailchimpListUniqueId}/members/`)
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + keys.mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.member.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.member.firstName,
            'LNAME': req.body.member.lastName
          }
        })
        .end(function(err, response) {
          console.log("/response/", response)
          if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
            res.send(response.body);
          } else {
            res.send(response.body);
          }
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
