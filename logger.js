const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {
            id: uuid.v4(),
            msg
        });
    }
}

const logger = new Logger();

logger.on('message', (data) => {
    console.log('Data: ', data);
});

logger.log('Hello World');
logger.log('Goodbye World');
logger.log('Hi World');