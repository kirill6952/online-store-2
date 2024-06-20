import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating" style={{ display: 'flex', justifyContent: 'center' }}>
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        style={{
                            cursor: 'pointer',
                            color: starValue <= (hover || rating) ? 'orange' : 'gray',
                            fontSize: '24px', // увеличиваем размер звезд
                        }}
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        &#9733;
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;