'use strict';

const aws = require('aws-sdk');

var ses = new aws.SES();

exports.handler = (event, context, callback) => {


    var params = {
        Destinations: ['hi@ritishgumber.me'],
        FromArn: "arn:aws:ses:us-east-1:292608800000:identity/ritishgumber.me",
        RawMessage: {
            Data: "From: test@ritishgumber.me\nTo: hi@ritishgumber.me\nSubject: Test email sent using the AWS SDK (contains an attachment)\nMIME-Version: 1.0\nContent-type: Multipart/Mixed; boundary=\"NextPart\"\n\n--NextPart\nContent-Type: text/plain\n\nThis is the message body.\n\n--NextPart\nContent-Type: text/plain;\nContent-Disposition: attachment; filename=\"attachment.txt\"\n\nThis is the text in the attachment.\n\n--NextPart--"
        },
        ReturnPathArn: "arn:aws:ses:us-east-1:292608800000:identity/ritishgumber.me",
        Source: "test@ritishgumber.me",
        SourceArn: "arn:aws:ses:us-east-1:292608800000:identity/ritishgumber.me"
    };
    ses.sendRawEmail(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
    });

};