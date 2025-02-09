import React from 'react';

const QuoteCard = ({ quote, authorName }) => {
  const cardStyle = {
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    color: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const quoteStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const authorStyle = {
    fontSize: '16px',
    fontStyle: 'italic',
  };

  return (
    <div style={cardStyle}>
      <p style={quoteStyle}>"{quote}"</p>
      <p style={authorStyle}>- {authorName}</p>
    </div>
  );
};

export default QuoteCard;
