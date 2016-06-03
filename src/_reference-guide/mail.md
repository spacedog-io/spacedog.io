---
layout: doc
title: Mail
rank: 10
---

#### /1/mail

Use this email endpoint to send admin emails to your backend users.

##### {backendId}.spacedog.io/1/mail

`POST` sends an email with the specified form fields. Only authorized to administrators.

- `to` –– String. List of recipents.
- `cc` –– String. List of carbon copy recipents.
- `bcc` –– String. List of blind carbon copy recipents.
- `subject` –– String. The email subject.
- `text` –– String. The email body in text format.
- `html` –– String. The email body in HTML format.

The `from` email property sent through this endpoint is not customizable and is set to `no-reply@api.spacedog.io`.
