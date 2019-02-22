"""
Sample Template containing curly braces:

{
    "Template": {
        "SubjectPart": "Greetings, {{name}}!", 
        "TextPart": "\\{{I am feeling safe inside curly braces in TextPart}} {{DataToReplace}}", 
        "TemplateName": "escape"
    }
}

"""

import boto3
import json 

client = boto3.client('ses')

DataToReplace = "I just got replaced!!!!"
name = "Amazon SES User"
TemplateData={}
TemplateData['name']=name
TemplateData['DataToReplace']=DataToReplace

response = client.send_templated_email(
    Source='hi@ritishgumber.me',
    Destination = {
        'ToAddresses': ['bye@ritishgumber.me']
    },
    Template = "escape",
    TemplateData = json.dumps(TemplateData)
)

print(response)
