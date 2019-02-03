var express = require('express');
var router = express.Router();

const stocksRoutes = require('./stocks/stocksRoutes');

router.use('/stocks', stocksRoutes);

module.exports = router;
