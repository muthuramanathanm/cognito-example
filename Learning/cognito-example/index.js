const express = require('express');
const bodyParser = require('body-parser');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const AWS = require('aws-sdk');
global.fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());

const poolData = {
    UserPoolId: 'us-east-1_B5C7hp1c1',
    ClientId: '64ckclp071ml7rtrsjep9vsuj5',
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// Sign Up Route
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    const username = email; // Using email as the username

    const attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: 'email',
        Value: email,
    }));

    userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
            res.status(400).send(err.message);
            return;
        }
        res.status(200).send(result.user);
    });
});

// Sign In Route
app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: username,
        Password: password,
    });

    const userData = {
        Username: username,
        Pool: userPool,
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
            res.status(200).send({
                idToken: result.getIdToken().getJwtToken(),
                accessToken: result.getAccessToken().getJwtToken(),
                refreshToken: result.getRefreshToken().getToken(),
            });
        },
        onFailure: (err) => {
            res.status(400).send(err.message);
        },
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
