import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [authorName, setAuthorName] = useState('');

  useEffect(() => {
    const fetchAllQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/quotes/getQuotesByAuthor');
        onSearch(response.data);
      } catch (error) {
        console.error('Failed to fetch all quotes', error);
      }
    };

    fetchAllQuotes();
  }, [ ]);

  const handleSearch = async () => {
    try {
      const url = authorName
        ? `http://localhost:5000/api/quotes/getQuotesByAuthor?authorName=${authorName}`
        : 'http://localhost:5000/api/quotes/getQuotesByAuthor';

      const response = await axios.get(url);
      onSearch(response.data);
    } catch (error) {
      console.error('Failed to fetch quotes by author', error);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '20px',
    background: 'linear-gradient(135deg,rgb(124, 143, 229),rgb(122, 90, 154))',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '500px',
    margin: '20px auto',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    width: '60%',
    outline: 'none',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    background: '#ff4081',
    color: '#fff',
    cursor: 'pointer',
    transition: '0.3s',
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholder="Search by Author"
        style={inputStyle}
      />
      <button style={buttonStyle} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
