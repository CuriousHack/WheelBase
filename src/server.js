require('dotenv').config();
const app = require('./app');
const logger = require('./shared/utils/logger');
const { connectDB } = require('./shared/db/connection');

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    const server = app.listen(PORT, () => {
    logger.info(`🛡️  Server running on port ${PORT}`);
    logger.info(`Modular Monolith mode: ON`);
  });

  // Graceful Shutdown block goes here later
})