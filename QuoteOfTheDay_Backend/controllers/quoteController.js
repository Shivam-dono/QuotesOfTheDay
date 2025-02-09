const Quote = require('../models/Quote');
const createQuote = async (req, res) => {
  const { quote, authorName } = req.body;
  try {
    const newQuote = await Quote.create({
      quote: quote || 'Random Quote',
      authorName: authorName || 'Random Author'
    });
    res.status(201).json(newQuote);
    console.log(newQuote);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save quote' });

  }
};
const getQuotesByAuthor = async (req, res) => {
  const { authorName } = req.query;
  try {
    if (!authorName) {
      const quotes = await Quote.find();
      return res.json(quotes);
    }
    const quotes = await Quote.find({ authorName: { $regex: authorName, $options: 'i' } });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
};
module.exports = { createQuote, getQuotesByAuthor };

