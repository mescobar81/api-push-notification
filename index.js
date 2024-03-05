const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const logger = require('./src/config/logger-config');
const router = require('./src/routes/push-routers');


app.use(bodyParser.json());
app.use('/api-push-notificacion/v1', router());

const PORT = process.env.PORT || 3000;

app.listen(5000, () =>{
    logger.info('Servidor escuchando en el puerto: ' + PORT);
});