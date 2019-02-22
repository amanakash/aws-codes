import boto3
import botocore

client = boto3.client('s3')

try:
	response = client.head_object(Bucket='ritish-kms', Key='test.txt')
	print(response)
except Exception as e:
    print (e.response)
