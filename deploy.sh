#!/bin/bash

# check prefix argument
if [ -z "$1" ]
  then
    echo "Error: no S3 prefix supplied"
    echo "Usage: deploy <prefix>"
    exit -1
fi

# sync to bucket
aws s3 sync ./target s3://spacedog.io/$1 --storage-class REDUCED_REDUNDANCY