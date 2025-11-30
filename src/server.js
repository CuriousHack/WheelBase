require('dotenv').config();
const app = require('./app');
const logger = require('./shared/utils/logger');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  logger.info(`🛡️  Server running on port ${PORT}`);
  logger.info(`Modular Monolith mode: ON`);
});

// Graceful Shutdown block goes here later