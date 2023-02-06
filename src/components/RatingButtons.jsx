import { useEffect, useRef } from 'react';

export const RatingButtons = ({ handleRatingClick, disabled, setDisabled }) => {
  const ratings = [1, 2, 3, 4, 5];

  const ratingRefs = {};
  ratings.map((rating) => {
    ratingRefs[rating] = useRef(null);
  });

  const handleOutsideClick = (e) => {
    let isClickInside = false;
    for (let rating in ratingRefs) {
      if (ratingRefs[rating].current.contains(e.target)) {
        isClickInside = true;
        break;
      }
    }

    if (!isClickInside) {
      setDisabled(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="card__button--group">
      {ratings.map((rating, idx) => {
        return (
          <button
            ref={ratingRefs[rating]}
            key={idx}
            onClick={() => handleRatingClick(rating)}
          >
            {rating}
          </button>
        );
      })}
    </div>
  );
};
