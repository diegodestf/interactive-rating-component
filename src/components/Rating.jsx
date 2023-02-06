import { useState } from 'react';
import starIcon from '../images/icon-star.svg';
import { RatingButtons } from './RatingButtons';

export const Rating = ({ handleSubmit }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    setDisabled(false);
  };

  return (
    <article className="card">
      {/* <!-- Rating state start --> */}
      <img className="card__icon" src={starIcon} alt="Star Icon" />
      <h1 className="card__title">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingButtons
        handleRatingClick={handleRatingClick}
        disabled={disabled}
        setDisabled={setDisabled}
      />
      <button
        className={`card__button--submit ${disabled ? 'with-icon' : ''}`}
        type="submit"
        onClick={() => handleSubmit(selectedRating)}
        disabled={disabled}
      >
        {disabled ? '' : 'Submit'}
      </button>
      {/* <!-- Rating state end --> */}
    </article>
  );
};
