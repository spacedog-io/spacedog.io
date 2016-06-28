---
layout: doc
title: Push
rank: 11
---

#### /1/installation

Use this endpoint to manage your mobile app installations on user devices and to push mobile notifications to them.

##### {backendId}.spacedog.io/1/installation

`GET` returns all the specified backend installations. Only authorized to administrators.

`DELETE` deletes all the specified backend installations. Only authorized to administrators.

`POST` creates a new installation. Request body example:

```json
{
  "token" : "...",
  "appId" : "...",
  "pushService" : "...",
  "tags" : [
    {"key" : "...", "value" : "..."},
    {"key" : "...", "value" : "..."}
  ]
}
```

Field | Description
------|------------
token | The token provided by the device to push notifications to this app.
appId | The id of the app to push to.
pushService | The push service to use to push to this device. Valid values are APNS, APNS_SANDBOX, ADM, GCM, BAIDU, WNS.
tags  | An array of tags used to select the installations to push to.
tags.key | the tag's key
tags.value | the tag's value

If an installation is posted with credentials of a valid user, the new installation is associated with this user. Otherwise the new installation is not associated with any user.

##### {backendId}.spacedog.io/1/installation/{id}

`GET` returns the specified installation.

`PUT` updates the specified installation.

`DELETE` deletes the specified installation. Only authorized to administrators or the owner of this object.

##### {backendId}.spacedog.io/1/installation/{id}/tags

`GET` returns the tags of the specified installation.

`DELETE` deletes the tags specified in the body from the tags of the specified installation. Request body example:

```json
[
  {"key" : "...",  "value" : "..."},
  {"key" : "...",  "value" : "..."}
]
```

`POST` adds a tag to the tags of the specified installation. Request body example:

```json
{
  "key" : "...",
  "value" : "..."
}
```

`PUT` replaces all the tags of the specified installation with the tags specified in the body. Request body example:


```json
[
  {"key" : "...",  "value" : "..."},
  {"key" : "...",  "value" : "..."}
]
```

##### {backendId}.spacedog.io/1/installation/push

`POST` pushes a notification to all installations of the specified app. Only authorized to users and administrators. Request body example:

```json
{
  "appId" : "...",
  "message" : "Hello there!",
  "usersOnly" : false,
  "pushService" : "APNS",
  "tags" : [
    {
      "key" : "...",
      "value" : "..."
    }
  ]
}
```

Field | Description
------|------------
appId | The id of the app to push to.
pushService | Optional. The service to push to. If none specified, pushes to all services.
usersOnly | Optional. Defaults to false. If true, pushes only to installations associated with a backend user.
tags  | Optional. Pushes only to installations with these tags. If none specified, pushes to all installations

It returns a list of installations pushed to. Example:

```json
{
  "success" : true,
  "status" : 200,
  "failures" : true,
  "pushedTo" : [
    {
      "id" : "AVURQaeykYZydi-1LnY2"
    },
    {
      "id" : "AVURQaf1kYZydi-1LnY5",
      "userId" : "vince"
    },
    {
      "id" : "AVURQagxkYZydi-1LnY8",
      "userId" : "fred"
    },
    {
      "id" : "AVURQahnkYZydi-1LnY_",
      "userId" : "dave",
      "error" : {
        "type" : "java.lang.IllegalArgumentException",
        "message" : "property [endpoint] is missing"
      }
    }
  ]
}
```