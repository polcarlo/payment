const express = require('express');
const router = express.Router();
const cashOut = require('../../json/CashOut');

const natural = cashOut.natural;
const juridical = cashOut.juridical;

router.get('/natural', (req, res) => res.json(natural));

router.get('/juridical', (req, res) => res.json(juridical));

module.exports = router;	