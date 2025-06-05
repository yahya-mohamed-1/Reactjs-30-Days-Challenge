import React, { useState } from 'react';
import '../styles/StarRating.css';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      <div className="star-row">
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;

          return (
            <span
              key={index}
              className={`star ${starValue <= (hover || rating) ? 'filled' : ''}`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          );
        })}
      </div>
      <p className="rating-text">Your Rating: {rating}</p>
    </div>
  );
};

export default StarRating;
