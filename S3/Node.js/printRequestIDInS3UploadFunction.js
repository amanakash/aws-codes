var AWS = require('aws-sdk')
AWS.S3.prototype.customizeRequests(function (request) {
    console.log(request)
    request.on('extractData', function (response) {
        console.log('success operation: ', response.request.operation, 'requestId: ', response.requestId)
    });
    request.on('extractError', function (response) {
        console.log('fail operation: ', response.request.operation, 'requestId: ', response.requestId)
    });
})

var s3 = new AWS.S3({
    region: 'us-east-1'
});

s3.upload({
    Bucket: 'bucket-name',
    Key: "key-name.txt",
    Body: "file.txt"
}, function (e, d) {
    if (!e) {
        console.log(d);
    } else {
        console.log(e);
    }
})