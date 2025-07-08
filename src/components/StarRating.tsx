'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function StarRating({ rating, onRatingChange, readonly = false, size = 'medium' }: StarRatingProps) {
  const [hoveredRating, setHoveredRating] = useState(0);

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  };

  const handleClick = (newRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const handleMouseEnter = (newRating: number) => {
    if (!readonly) {
      setHoveredRating(newRating);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoveredRating(0);
    }
  };

  const getStarColor = (starIndex: number) => {
    const effectiveRating = hoveredRating || rating;
    
    if (starIndex <= effectiveRating) {
      return 'text-yellow-400 fill-current';
    }
    return 'text-gray-300';
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <button
          key={starIndex}
          type="button"
          className={`${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} transition-transform ${sizeClasses[size]}`}
          onClick={() => handleClick(starIndex)}
          onMouseEnter={() => handleMouseEnter(starIndex)}
          onMouseLeave={handleMouseLeave}
          disabled={readonly}
        >
          <Star
            className={`${sizeClasses[size]} ${getStarColor(starIndex)} transition-colors`}
          />
        </button>
      ))}
    </div>
  );
}