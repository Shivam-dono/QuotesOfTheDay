const express = require('express');
const { createQuote, getQuotesByAuthor } = require('../controllers/quoteController');

const router = express.Router();
router.route('/createQuote').post(createQuote);
router.route('/getQuotesByAuthor').get(getQuotesByAuthor);




module.exports = router;
