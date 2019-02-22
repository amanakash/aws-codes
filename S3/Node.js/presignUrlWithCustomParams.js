/*
*
* This is helpful when you want to create S3 Presign URL and add a custom parameter for tracking purspose.
* All the query string parameters are logged in the S3 server access logs.
*
*/ 

var AWS = require('aws-sdk');

var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    signatureVersion: 'v4'
});

var req = s3.getObject({
    Bucket: 'bucket-name',
    Key: 'key-name'
});

req.on('build', function() {
    req.httpRequest.path += '?x-request=test@ritishgumber.me';
});

console.log(req.presign(1000));
