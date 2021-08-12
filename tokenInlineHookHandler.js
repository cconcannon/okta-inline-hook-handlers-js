exports.handler = (event, context, callback) => {
    let oktaRequestBody = event.body

    // Example oktaRequestBody:
    // {
    //     "source": "https://${yourOktaDomain}/oauth2/default/v1/authorize",
    //     "eventId": "3OWo4oo-QQ-rBWfRyTmQYw",
    //     "eventTime": "2019-01-15T23:20:47.000Z",
    //     "eventTypeVersion": "1.0",
    //     "cloudEventVersion": "0.1",
    //     "contentType": "application/json",
    //     "eventType": "com.okta.oauth2.tokens.transform",
    //     "data": {
    //         "context": {
    //             "request": {
    //                 "id": "reqv66CbCaCStGEFc8AdfS0ng",
    //                 "method": "GET",
    //                 "url": {
    //                     "value": "https://${yourOktaDomain}/oauth2/default/v1/authorize?scope=openid+profile+email&response_type=token+id_token&redirect_uri=https%3A%2F%2Fhttpbin.org%2Fget&state=foobareere&nonce=asf&client_id=customClientIdNative"
    //                 },
    //                 "ipAddress": "127.0.0.1"
    //             },
    //             "protocol": {
    //                 "type": "OAUTH2.0",
    //                 "request": {
    //                     "scope": "openid profile email",
    //                     "state": "foobareere",
    //                     "redirect_uri": "https://httpbin.org/get",
    //                     "response_mode": "fragment",
    //                     "response_type": "token id_token",
    //                     "client_id": "customClientIdNative"
    //                 },
    //                 "issuer": {
    //                     "uri": "https://${yourOktaDomain}/oauth2/default"
    //                 },
    //                 "client": {
    //                     "id": "customClientIdNative",
    //                     "name": "Native client",
    //                     "type": "PUBLIC"
    //                 }
    //             },
    //             "session": {
    //                 "id": "102Qoe7t5PcRnSxr8j3I8I6pA",
    //                 "userId": "00uq8tMo3zV0OfJON0g3",
    //                 "login": "administrator1@clouditude.net",
    //                 "createdAt": "2019-01-15T23:17:09.000Z",
    //                 "expiresAt": "2019-01-16T01:20:46.000Z",
    //                 "status": "ACTIVE",
    //                 "lastPasswordVerification": "2019-01-15T23:17:09.000Z",
    //                 "amr": [
    //                     "PASSWORD"
    //                 ],
    //                 "idp": {
    //                     "id": "00oq6kcVwvrDY2YsS0g3",
    //                     "type": "OKTA"
    //                 },
    //                 "mfaActive": false
    //             },
    //             "user": {
    //                 "id": "00uq8tMo3zV0OfJON0g3",
    //                 "passwordChanged": "2018-09-11T23:19:12.000Z",
    //                 "profile": {
    //                     "login": "administrator1@clouditude.net",
    //                     "firstName": "Add-Min",
    //                     "lastName": "O'Cloudy Tud",
    //                     "locale": "en",
    //                     "timeZone": "America/Los_Angeles"
    //                 },
    //                 "_links": {
    //                     "groups": {
    //                         "href": "https://${yourOktaDomain}/00uq8tMo3zV0OfJON0g3/groups"
    //                     },
    //                     "factors": {
    //                         "href": "https://${yourOktaDomain}/api/v1/users/00uq8tMo3zV0OfJON0g3/factors"
    //                     }
    //                 }
    //             },
    //             "policy": {
    //                 "id": "00pq8lGaLlI8APuqY0g3",
    //                 "rule": {
    //                     "id": "0prq8mLKuKAmavOvq0g3"
    //                 }
    //             }
    //         },
    //         "identity": {
    //             "claims": {
    //                 "sub": "00uq8tMo3zV0OfJON0g3",
    //                 "name": "Add-Min O'Cloudy Tud",
    //                 "email": "administrator1@clouditude.net",
    //                 "ver": 1,
    //                 "iss": "https://${yourOktaDomain}/oauth2/default",
    //                 "aud": "customClientIdNative",
    //                 "jti": "ID.YxF2whJfB3Eu4ktG_7aClqtCgjDq6ab_hgpiV7-ZZn0",
    //                 "amr": [
    //                     "pwd"
    //                 ],
    //                 "idp": "00oq6kcVwvrDY2YsS0g3",
    //                 "nonce": "asf",
    //                 "preferred_username": "administrator1@clouditude.net",
    //                 "auth_time": 1547594229
    //             },
    //             "token": {
    //                 "lifetime": {
    //                     "expiration": 3600
    //                 }
    //             }
    //         },
    //         "access": {
    //             "claims": {
    //                 "ver": 1,
    //                 "jti": "AT.W-rrB-z-kkZQmHW0e6VS3Or--QfEN_YvoWJa46A7HAA",
    //                 "iss": "https://${yourOktaDomain}/oauth2/default",
    //                 "aud": "api://default",
    //                 "cid": "customClientIdNative",
    //                 "uid": "00uq8tMo3zV0OfJON0g3",
    //                 "sub": "administrator1@clouditude.net",
    //                 "firstName": "Add-Min",
    //                 "preferred_username": "administrator1@clouditude.net"
    //             },
    //             "token": {
    //                 "lifetime": {
    //                     "expiration": 3600
    //                 }
    //             },
    //             "scopes": {
    //                 "openid": {
    //                     "id": "scpq7bW1cp6dcvrz80g3",
    //                     "action": "GRANT"
    //                 },
    //                 "profile": {
    //                     "id": "scpq7cWJ81CIP5Qkr0g3",
    //                     "action": "GRANT"
    //                 },
    //                 "email": {
    //                     "id": "scpq7dxsoz6LQlRj00g3",
    //                     "action": "GRANT"
    //                 }
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
        // See https://developer.okta.com/docs/reference/token-hook/#commands
        // for information on acceptable commands in the response
        "commands": [
            {
                "type": "com.okta.identity.patch",
                "value": [
                    {
                        "op": "add",
                        "path": "/claims/extPatientId",
                        "value": "1234"
                    }
                ]
            },
            {
                "type": "com.okta.access.patch",
                "value": [
                    {
                        "op": "add",
                        "path": "/claims/external_guid",
                        "value": "F0384685-F87D-474B-848D-2058AC5655A7"
                    }
                ]
            }
        ]
    };

    let response = {
        "statusCode": 200,
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };

    callback(null, response);
}