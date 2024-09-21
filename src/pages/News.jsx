import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'; // Import your CSS for styling

const News = () => {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('us'); // Default country
  const [userInput, setUserInput] = useState(''); // For user input

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: country,
            category: 'technology', // Example category
            apiKey: 'a71f6762be6b4767aee0c7a471658d68', // Replace with your NewsAPI key
          },
        });
        console.log(response);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, [country]); // Fetch news when the country state changes

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountry(userInput.toLowerCase()); // Set the country state to user's input
  };

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      
      {/* Form to input the country */}
      <form className="Form" nSubmit={handleSubmit}>
        <input
          className='inptt'
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter country code (e.g., 'us', 'in')"
        />
        <button 
        className='btnn'
        type="submit">Get News</button>
      </form>

      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="news-item">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default News;
