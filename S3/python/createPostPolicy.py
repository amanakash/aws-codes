import boto3
from botocore.client import Config


# Fill in the correct S3 Region corresponding to the destination S3 bucket's region. 
s3 = boto3.client('s3', 'us-east-1', config=Config(signature_version='s3v4', s3={'addressing_style': 'virtual'}))

policy=s3.generate_presigned_post(
        Bucket = 'bucket-name',
        Key = 'key-name.ext',
        Conditions = [
             ['starts-with', '$key', ''],
      {'acl': 'public-read'},
      ['starts-with', '$Content-Type', '']
        ]

    )


print (policy)

