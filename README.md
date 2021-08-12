# Okta Hook Handlers

A Serverless Application Module (SAM) stack that deploys an API to handle Okta Hooks using AWS Api Gateway and Lambda functions.

For more information about Okta Inline Hooks, see [the Okta Inline Hooks documentation.](https://developer.okta.com/docs/concepts/inline-hooks/)

## Endpoints

- [Token Inline Hook](https://developer.okta.com/docs/reference/token-hook/) invoked via `/token` endpoint
- [User Import Inline Hook](https://developer.okta.com/docs/reference/import-hook/) invoked via `/user-import` endpoint
- [SAML Assertion Inline Hook](https://developer.okta.com/docs/reference/saml-hook/) invoked via `/saml-assertion` endpoint
- [Registration Inline Hook](https://developer.okta.com/docs/reference/registration-hook/) invoked via `/registration` endpoint
- [Password Import Inline Hook](https://developer.okta.com/docs/reference/password-hook/) invoked via `/password-import` endpoint

## Error Handling

Any errors that should interrupt the relevant Okta process (such as registration or authentication) should be returned as an `error` object in the response. `error.errorSummary` will appear in the Okta System Log. Okta still expects a `200` status code when `error` objects are present in the response body.

*Example: if Okta receives a 200 response from the `/registration` handler endpoint, and the response body contains the `error` object, the user registration will fail.*

*Example: if Okta receives a 200 response from the `/registration` handler endpoint, and there is no `error` object, Okta will attempt to process the valid `commands` in the response body.*

Okta expects to receive `200` responses from the handler endpoints regardless of the outcome of the handler logic. **Any response codes other than `200` will be logged in the System Log, but will not affect the relevant Okta process.**

*Example: if Okta receives a 4xx or 5xx response from the `/registration` handler endpoint, the user registration will be allowed to proceed.*

## Usage

1. Local Build: `sam build`
2. Deploy to AWS: `sam deploy --guided` (must have aws-cli appropriately configured). Note the output
3. Fetch API key value: `aws apigateway get-api-keys --include-values` (if multiple, choose the one you just created)
4. Construct the url from the output of Step 2: `https://abc123.execute-api.us-west-1.amazonaws.com/token` and add a header `x-api-key` with the API key value from (3)
5. Send a `POST` request to the endpoint: `curl -X POST -H "x-api-key:{api-key-value}" https://{api-id}.execute-api.{region}.amazonaws.com/token`