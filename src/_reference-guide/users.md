---
layout: doc
title: Users
rank: 1
---

#### /1/user

Users represent all the people accessing a backend, its data and services. User's data and credentials are stored in backends. The different type of users are regular app users (USER), administrators and super administrators (ADMIN, SUPER_ADMIN). To access backend services or data needing authorization, users must log in with a valid login and password pair provided as regular http basic authorization.

##### {backendId}.spacedog.io/1/login

`GET` checks if the user specified by the `Authorization` header is authorized to access the specified backend. User's username and password must be provided through regular http basic authorization scheme.

##### {backendId}.spacedog.io/1/user

`POST` signs up a new user to the specified app.

- `Body` a user sign-up JSON object:

```json
{
	"username" : "roberta",
	"password" : "MyNameIsRoberta",
	"email" : "roberta@me.com"
}
```

`GET` returns all users.

##### {backendId}.spacedog.io/1/user/{username}

`GET` returns the specified user of the specified backend.

- `username` –– the user's username.

`PUT` updates the specified user.

- `username` –– the user's username.
- request body –– a user JSON object.

`DELETE` deletes the specified user.

- `username` –– a user's username.

##### {backendId}.spacedog.io/1/user/{username}/password

`DELETE` deletes the specified user's password. Returns a `passwordResetCode` to use to set a new password. The user can not log in anymore until he sets a new password. Only authorized to administrators.

- `username` –– the user's username.

`POST` sets the password of the specified user. The user must not have any password or his previous password must have been deleted. A `passwordResetCode` must be provided.

- `username` –– the user's username.
- `passwordResetCode` –– the code received when the user's password has been deleted and allowing you to set a new password.
- `password` –– the user's new password.

`PUT` resets the password of the specified user with a new password. Only authorized to the specified user.

- `username` –– the user's username.
- `password` –– the user's new password.


