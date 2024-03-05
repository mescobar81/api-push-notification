const pino = require('pino');

const transport = pino.transport({
  /*transport: {
      targets: [{
          level: 'info',
          target: 'pino-pretty' // must be installed separately
        }, {
          target: 'pino/file',
          options: { destination: './push.log' }
        }],
      options: {
          translateTime: 'SYS:dd-mm-yyyy HH:mm:ss',
          ignore: 'pid'
      }
  }*/
  
  /*transport: {
    target: 'pino-pretty', // must be installed separately,
    options: {
        translateTime: 'SYS:dd-mm-yyyy HH:mm:ss',
        ignore: 'pid'
    }
},*/
  targets: [
    {
      target: 'pino/file',
      level: 'info',
      options: {
        destination: `./log/push-notification.log`,
        mkdir: true
      }
    },
    {
      target: 'pino-pretty'
    }
  ]
});

const logger = pino({
  /* formatters:{
    level: (label) =>{
      return {level: label.toUpperCase()};
    }
  } */
},
transport
);
module.exports = logger;