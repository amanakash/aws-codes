### [AWS Sample codes](/) 

# [Amazon S3](../)

## AWS CLI Commands

   * Get Bucket Size:
    ```
    aws s3api list-object-versions --bucket bucket-name --output json --query "[sum(Versions[].Size)]"
    ```

   * List only previous or latest version (Do not list delete markers):
    ```
    aws s3api list-object-versions  --bucket bucket-name --query 'Versions[?IsLatest==`false`].{KeyName:Key,IsLatestVersion:IsLatest}'
    ```
     
#### Contact: [hi@ritishgumber.me](mailto:hi@ritishgumber.me)

#### [Issues](https://github.com/ritishgumber/aws-codes/issues)
