---
layout: doc
title: Batch
rank: 8
---

#### /1/batch

Use a batch request when you need to send to your backend a batch of requests. It speeds up operations since there is only one round trip to the server.

##### {backendId}.spacedog.io/1/batch

`POST` processes a batch of maximum 10 requests. The body is an array of request JSON objects. Example:

```json
[
     {
          "method" : "GET",
          "path" : "/1/data/product/AVTkKLKsuJhkJMV-I3kz",
     },
     {
          "method" : "POST",
          "path" : "/1/data/product",
          "body" : {
               "name" : "Teddy Bear",
               "price" : "$23.45"
          }
     },
     {
          "POST" : "/v1/data/product",
          "body" : {
               "name" : "Mobby Dick",
               "price" : "$29.99"
          }
     },
     {
          "method" : "DELETE",
          "path" : "/1/data/product/GVTkGHKsuJhkJMV-i2ke"
     }
]
```

And it returns an array of response JSON objects. Example:

```json
[
     {
          "name" : "Thunder Buzz",
          "price" : "$13.45",
          "meta": {
               "createdBy": "fred",
               "updatedBy": "fred",
               "createdAt": "2016-05-24T19:05:53.068Z",
               "updatedAt": "2016-05-26T09:08:13.411Z",
               "id": "AVTkKLKsuJhkJMV-I3kz",
               "type": "product",
               "version": 4
          },
     },
     {
          "success" : true,
          "status" : 200,
          "id" : "HJTkKLKsuJhkJMVoUIh6g",
          "location" : "https://mybackend.spacedog.io/1/data/product/HJTkKLKsuJhkJMVoUIh6g"
     },
     {
          "success" : true,
          "status" : 200,
          "id" : "lYJTkKLKsuJhkJMVoUIh9T",
          "location" : "https://mybackend.spacedog.io/1/data/product/lYJTkKLKsuJhkJMVoUIh9T"
     },
     {
          "success" : false,
          "status" : 404,
          "error" : {
               "type" : "io.spacedog.services.NotFoundException",
               "message" : "object [GVTkGHKsuJhkJMV-i2ke] of type [product] not found",
          }
     }
]
```

- `stopOnError` –– Boolean. Defaults to false. If true, stops the batch processing when one request returns an http error (40X or 50X).