import React, { useState, useEffect } from 'react';
import StoryCard from './StoryCard'; 

const StoryAPI = ({ searchTerm }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true); 
      try {
        const response = await fetch(`https://openlibrary.org/search.json?title=${searchTerm}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const formattedStories = data.docs.map(book => ({
          title: book.title,
          author: book.author_name?.[0] || 'Unknown',
          rating: 4 // Mock rating since the API doesn't provide it
        }));
        
        setStories(formattedStories);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchStories();
    }
  }, [searchTerm]);

  if (loading) {
    return <p>Loading stories...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-wrap px-4">
      {stories.length > 0 ? (
        stories.map((story, index) => (
          <StoryCard 
            key={index}
            title={story.title} 
            author={story.author} 
            rating={story.rating} 
          />
        ))
      ) : (
        <p>No stories found.</p>
      )}
    </div>
  );
};

export default StoryAPI;
