exports.handler = (event, context, callback) => {
    let oktaRequestBody = event.body
    // {
    //     "source": "cal7eyxOsnb20oWbZ0g4",
    //     "eventId": "JUGOUiYZTaKPmH6db0nDag",
    //     "eventTime": "2019-02-27T20:59:04.000Z",
    //     "eventTypeVersion": "1.0",
    //     "cloudEventVersion": "0.1",
    //     "eventType": "com.okta.import.transform",
    //     "contentType": "application/json",

    //     "data": {
    //         "context": {
    //             "conflicts": [
    //                 "login"
    //             ],
    //             "application": {
    //                 "name": "test_app",
    //                 "id": "0oa7ey7aLRuBvcYUD0g4",
    //                 "label": "app7ey6eU5coTOO5v0g4",
    //                 "status": "ACTIVE"
    //             },
    //             "job": {
    //                 "id": "ij17ez2AWtMZRfCZ60g4",
    //                 "type": "import:users"
    //             },
    //             "matches": [

    //             ],
    //             "policy": [
    //                 "EMAIL",
    //                 "FIRST_AND_LAST_NAME"
    //             ]
    //         },

    //         "action": {
    //             "result": "CREATE_USER"
    //         },

    //         "appUser": {
    //             "profile": {
    //                 "firstName": "Sally2",
    //                 "lastName": "Admin2",
    //                 "mobilePhone": null,
    //                 "accountType": "PRO",
    //                 "secondEmail": null,
    //                 "failProvisioning": null,
    //                 "failDeprovisioning": null,
    //                 "externalId": "user221",
    //                 "groups": [
    //                     "everyone@clouditude.net",
    //                     "tech@clouditude.net"
    //                 ],
    //                 "userName": "administrator2",
    //                 "email": "sally.admin@clouditude.net"
    //             }
    //         },

    //         "user": {
    //             "profile": {
    //                 "lastName": "Admin2",
    //                 "zipCode": null,
    //                 "city": null,
    //                 "secondEmail": null,
    //                 "postAddress": null,
    //                 "login": "sally.admin@clouditude.net",
    //                 "firstName": "Sally2",
    //                 "primaryPhone": null,
    //                 "mobilePhone": null,
    //                 "streetAddress": null,
    //                 "countryCode": null,
    //                 "typeId": null,
    //                 "state": null,
    //                 "email": "sally.admin@clouditude.net"
    //             }
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
        // See https://developer.okta.com/docs/reference/import-hook/#supported-commands
        // for information on acceptable commands in the response
        "commands": [
            {
                "type": "com.okta.action.update",
                "value": {
                    "result": "LINK_USER"
                }
            },
            {
                "type": "com.okta.user.update",
                "value": {
                    "id": "00garwpuyxHaWOkdV0g4"
                }
            },
            {
                "type": "com.okta.user.profile.update",
                "value": {
                    "firstName": "Stan",
                    "lastName": "Lee"
                }
            }
        ]
    }

    let response = {
        "statusCode": 200,
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };

    callback(null, response);
}