const logger = require('../config/logger-config');
const conexion = require('../database/db-conexion');
const {firebase} = require('../push-config/push-config');

async function sendNotification(req, res, next) {
    logger.info(req.body);
    
    const {notificacion} = req.body;
    try {
        /* await conexion.connect();
        const result = await conexion.executeQuery('select * from host_summary');
        res.json(result); */
        /* const options = {
            priority: 'high',
            timeToLive: 60*60*24
        } */

        const message_notification = {
            data: {
                pantallaAbrir:notificacion.pantallaAbrir,
                version:notificacion.version,
                title:notificacion.mensaje.titulo,
                body:notificacion.mensaje.descripcionCorta,
                tipo:notificacion.tipo,
                vigencia:JSON.stringify(notificacion.vigencia)
            },
            notification:{
                title:notificacion.mensaje.titulo,
                body:notificacion.mensaje.descripcionCorta
            },
            token:notificacion.idTokenFirebase
        }
        await firebase.messaging()
        .send(message_notification);

        res.status(200).send({
            codigo: 200,
            mensaje: 'Notificación enviada con éxito'
        });
    } catch (error) {
        console.log('Error en Firebase Messaging', error);
        next();
    }finally{
        //conexion.end();
    }
}

module.exports = {
    sendNotification
}