var cf = require('aws-cloudfront-sign')
var options = {
    keypairId: 'APKAIBXUQHXXXXXXXXXX',
    privateKeyPath: '../../Downloads/pk-APKAIBXUQHXXXXXXXXXX.pem'
}

var signedURL = cf.getSignedUrl('https://d3olzo7cbxsweq.cloudfront.net/test.txt', options);

var signedCookies = cf.getSignedCookies('https://d3olzo7cbxsweq.cloudfront.net/*', options);

console.log("Signed URL: ", signedURL);
console.log("Signed Cookies: ", signedCookies);