const express = require('express');
const router = express.Router();

// Simple inline controller for now - we will separate later
router.get('/status', (req, res) => {
  res.json({ status: 'Access Control Module is active' });
});

module.exports = router;