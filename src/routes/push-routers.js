const express = require('express');
const pushNotification = require('../controllers/push-notification.controller');
const router = express.Router();

module.exports = function() {

    router.get('/enviar/token', pushNotification.sendNotification);

    return router;
}