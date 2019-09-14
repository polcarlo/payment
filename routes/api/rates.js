const express = require('express');
const router = express.Router();
const cashOut = require('../../json/CashOut');
const requestDetails = require('../../request/request');
const computation = require('../../helper/computation');

router.route('/').get(function(req, res){

    computation.compute();

    res.json('Running');

  });

module.exports = router;	