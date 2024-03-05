const firebase = require('firebase-admin');

const serviceAccount = require('../../asotigo-asociados-firebase-adminsdk-hlhk9-b77616ecd5.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});

module.exports.firebase = firebase;