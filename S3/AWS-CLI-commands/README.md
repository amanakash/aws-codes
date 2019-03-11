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

   * Get the size of the latest version of the objects (Conditional Sum):
    ```
    aws s3api list-object-versions  --bucket bucket-name --query '[sum(Versions[?IsLatest==`true`].Size)]'
    ```

   * Sort the S3 object list on the basis of a parameter:
    ```
    aws s3api list-objects --bucket bucket-name --query "reverse(sort_by(Contents, &LastModified)[*].[Key, LastModified])" --output table 
    ```

   * List objects of a particualr date range:
    ```
    aws s3api list-objects --bucket bucket-name --query 'Contents[?LastModified>=`2018-12-05` && LastModified<=`2018-12-06`][Key]' --output text | xargs -I {} aws s3api delete-object --bucket ritish-cross --key {}
    ```

   * List objects of a particular storage class:
    ```
    aws s3api list-objects --bucket bucket-name --query 'Contents[?StorageClass==`GLACIER`][Key]' --output text
    ```

   * List buckets created in a particualr date range:
    ```
    aws s3api list-buckets --query 'Buckets[?CreationDate>=`2018-02-01` && CreationDate<=`2018-02-17`][][Name]' --output text
    ```

   * Initiate Object restore for objects in Glacier storage class only:
    ```
    aws s3api list-objects --bucket bucket-name --query 'Contents[?StorageClass==`GLACIER`][Key]' --output text | xargs -I {} aws s3api restore-object --bucket bucket-name --key {} --restore-request Days=2,GlacierJobParameters={Tier=Standard}
    ```






    
     
#### Contact: [hi@ritishgumber.me](mailto:hi@ritishgumber.me)

#### [Issues](https://github.com/ritishgumber/aws-codes/issues)
