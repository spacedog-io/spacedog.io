---
layout: doc
title: Share
rank: 5
---

#### /1/share

The share endpoint provides a way to share files with other users.

##### {backendId}.spacedog.io/1/share

`GET` lists all the specified backend shared files. Only authorized to administrators.

`DELETE` deletes all the specified backend shared files. Only authorized to administrators.

##### {backendId}.spacedog.io/1/share/{filename}

`PUT` uploads a file for sharing. Only authorized to users.

Parameters | Description
-------|------------
filename | The file name. Used to derive the share identifier and the content type. Also used to provide a name when downloading the file from a web browser.
Content-type | Optional. Header defining the type of file. If this header is not set, the file name extension if present is used to derive the content type. Defaults to `application/octet-stream`.
body | The file byte array.

##### {backendId}.spacedog.io/1/share/{id}/{filename}

`GET` retuns the specified shared file binary.

Parameters | Description
-------|------------
id | The share identifier.
filename | The file name.
withContentDisposition | Boolean. Defaults to false. Returns the `Content-Disposition` header to automaticaly save the file to disk upon download.

The following headers are returned:

Headers | Description
-------|------------
Etag | The file MD5 hash.
X-spacedog-owner | The file owner's username.
Content-disposition | Optional. The name of use to save the file to disk upon download.

`DELETE` deletes the specified shared file. Only authorized to administrators or the owner of the file.

Parameters | Description
-------|------------
id | The share identifier.
filename | The file name.
