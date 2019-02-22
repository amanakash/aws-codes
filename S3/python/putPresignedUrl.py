import boto3
from botocore.client import Config


# Fill in the correct S3 Region corresponding to the destination S3 bucket's region. 
s3 = boto3.client('s3', 'us-east-1', config=Config(signature_version='s3v4', s3={'addressing_style': 'virtual'}))

url = s3.generate_presigned_url(
    ClientMethod='put_object', 
    Params={
        'Bucket':'bucket-name',
        'Key':'key-name.ext'
            }, 
    ExpiresIn=3600, # How long to make the S3 Presigned URL valid for.
    HttpMethod='PUT'
)

print (url)
