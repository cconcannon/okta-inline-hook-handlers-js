exports.handler = (event, context, callback) => {
    const oktaRequestBody = event.body;

    // Example oktaRequestBody:
    // {
    //     "eventId": "GOsk4z6tSSeZo6X08MvKaw",
    //     "eventTime": "2019-08-27T18:07:24.000Z",
    //     "eventType": "com.okta.user.pre-registration",
    //     "eventTypeVersion": "1.0",
    //     "contentType": "application/json",
    //     "cloudEventVersion": "0.1",
    //     "source": "reghawlks3zOkRrau0h7",
    //     "data": {
    //         "context": {
    //             "request": {
    //                 "id": "XWVxW2zcaH5-Ii74OsI6CgAACJw",
    //                 "method": "POST",
    //                 "url": {
    //                     "value": "/api/v1/registration/reghawlks3zOkRrau0h7/register"
    //                 },
    //                 "ipAddress": "98.124.153.138"
    //             }
    //         },
    //         "userProfile": {
    //             "lastName": "Doe",
    //             "firstName": "John",
    //             "login": "john.doe@example.com",
    //             "email": "john.doe@example.com"
    //         },
    //         "action": null
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
        // See https://developer.okta.com/docs/reference/registration-hook/#commands
        // for information on acceptable commands in the response
        "commands": [
            {
                "type": "com.okta.action.update",
                "value": {
                    "registration": "DENY"
                }
            }
        ]
    };

    let response = {
        "statusCode": 200,
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };

    console.log("Response Body:\n", responseBody);
}