const pino = require('pino');

// A lightning fast logger that outputs JSON
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty', // Makes logs readable in dev, use raw JSON in prod
    options: { colorize: true }
  }
});

module.exports = logger;