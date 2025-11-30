const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./shared/utils/logger');

// Import Modules
const accessControlModule = require('./modules/access-control');

const app = express();

// 1. Global Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// 2. Mount Modules
// This is the "Modular" part. Each module defines its own prefix.
console.log(`Mounting Auth Module at: /api/v1${accessControlModule.prefix}`);
app.use(`/api/v1${accessControlModule.prefix}`, accessControlModule.routes);

// 3. 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});

module.exports = app;