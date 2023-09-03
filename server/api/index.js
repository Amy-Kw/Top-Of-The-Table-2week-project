const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

// ROUTER: /api/usersapi
router.use('/userapi', require('./usersapi'));

// ROUTER: /api/infoapi
router.use('/infoapi', require('./infoapi'));

module.exports = router;