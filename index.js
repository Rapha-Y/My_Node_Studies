const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => {
    console.log('Data: ', data);
});

logger.log('Hello World');
logger.log('Goodbye World');
logger.log('Hi World');