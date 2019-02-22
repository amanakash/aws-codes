import boto3
import botocore

client = boto3.client('s3')

try:
	response = client.head_object(Bucket='bucket-name', Key='key-name.ext')
	print(response)
except Exception as e:
    print (e.response)
