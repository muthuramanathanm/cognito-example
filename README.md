# Testing the Application

## Testing Signup:
Make a POST request to `http://localhost:3000/signup` with the following JSON body:
```json
{
    "email": "testuser@example.com",
    "password": "Test@1234"
}

## Testing Signin:
Make a POST request to http://localhost:3000/signin with the following JSON body:
```json
{
    "username": "testuser@example.com",
    "password": "Test@1234"
}
