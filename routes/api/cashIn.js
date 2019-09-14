const express = require('express');
const router = express.Router();
const cashIn = require('../../json/CashIn');

router.get('/', (req, res) => res.json(cashIn));

module.exports = router;