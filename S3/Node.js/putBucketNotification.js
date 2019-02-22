var AWS = require('aws-sdk')

const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    signatureVersion: 'v4',
    region: 'us-east-1'
});

var params = {
    Bucket: 'bucket-name',
    /* required */
    NotificationConfiguration: {
        /* required */
        LambdaFunctionConfigurations: [{
                Events: [ /* required */
                    "s3:ObjectCreated:*"
                    /* more items */
                ],
                LambdaFunctionArn: 'arn:aws:lambda:us-east-1:292608800000:function:s3object',
                /* required */
                Id: 'testNotifcation'
            },
            /* more items */
        ]
    }
};
s3.putBucketNotificationConfiguration(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});