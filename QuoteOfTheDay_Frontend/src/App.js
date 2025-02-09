import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import SearchBar from './components/SearchBar';

function App() {
  const [quote, setQuote] = useState(null);
  const [authorQuotes, setAuthorQuotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quotes/random')
      .then(response => setQuote(response.data))
      .catch(error => console.error('Error fetching random quote', error));
  }, []);

  const handleSearch = (quotes) => {
    setAuthorQuotes(quotes);
  };

  return (
    <div className="App">
      <h1 style= {{ 
          background: 'linear-gradient(135deg,rgb(129, 152, 255),white,rgb(82, 0, 164))',
          position: "sticky",
          top: "0",
        textAlign: "center",
        fontFamily: "cursive",
        wordSpacing: "10px",
        padding: "20px 0px",
        marginTop: "0px",
        textShadow: "2px 2px 4px gray",
        fontSize: "40px",
        fontWeight: "bold",
      }}>Quote of the Day</h1>
      
      {quote && <QuoteCard quote={quote.content} authorName={quote.author} />}

      <SearchBar onSearch={handleSearch} />

      
      <div>
        {authorQuotes.length > 0 ? (
          authorQuotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote.quote} authorName={quote.authorName} />
          ))
        ) : (
          <p>No quotes found</p>
        )}
      </div>
    </div>
  );
}

export default App;
