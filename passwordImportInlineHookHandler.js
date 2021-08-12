exports.handler = (event, context, callback) => {
    const oktaRequestBody = event.body;

    // Example oktaRequestBody:
    // {
    //     "eventId": "3o9jBzq1SmOGmmsDsqyyeQ",
    //     "eventTime": "2020-01-17T21:23:56.000Z",
    //     "eventType": "com.okta.user.credential.password.import",
    //     "eventTypeVersion": "1.0",
    //     "contentType": "application/json",
    //     "cloudEventVersion": "0.1",
    //     "source": "https://${yourOktaDomain}/api/v1/inlineHooks/cal2xd5phv9fsPLcF0g7",
    //     "data": {
    //         "context": {
    //             "request": {
    //                 "id": "XiIl6wn7005Rr@fjYqeC7AAABxw",
    //                 "method": "POST",
    //                 "url": {
    //                     "value": "/api/v1/authn"
    //                 },
    //                 "ipAddress": "98.124.153.138"
    //             },
    //             "credential": {
    //                 "username": "isaac.brock@example.com",
    //                 "password": "Okta"
    //             }
    //         },
    //         "action": {
    //             "credential": "UNVERIFIED"
    //         }
    //     }
    // }

    let responseBody = {
        // It is possible to return an error object to Okta.
        // error.errorSummary is logged in the System Log.
        // 
        // Example:
        // 
        // "error": {
        //     "errorSummary": "Something went wrong"
        // }
        //
        // See https://developer.okta.com/docs/reference/password-hook/#commands 
        // for information on acceptable commands in the response
        "commands": [
            {
                "type": "com.okta.action.update",
                "value": {
                    "credential": "VERIFIED"
                }
            }
        ]
    };

    let response = {
        "statusCode": 200,
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };

    callback(null, errorResponse);
}