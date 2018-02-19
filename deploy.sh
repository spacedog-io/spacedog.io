#!/bin/bash

# sync to bucket
aws s3 sync ./target s3://spacedog.io/0 --exclude ".*" --exclude "**/.*" --storage-class REDUCED_REDUNDANCY --delete

# update cloudfront origin prefix
aws cloudfront create-invalidation --distribution-id E3F1JQPG43OO6J --paths /\*
