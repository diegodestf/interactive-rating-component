import { useState } from 'react';
import Helmet from 'react-helmet';
import { CSSTransition } from 'react-transition-group';
import { Rating } from './components/Rating';
import { Thanks } from './components/Thanks';

function App() {
  const [showRatingComponent, setShowRatingComponent] = useState(true);
  const [rating, setRating] = useState(0);

  const handleSubmit = (rating) => {
    setRating(rating);
    setShowRatingComponent(false);
  };

  const handleBack = () => {
    setShowRatingComponent(true);
  };

  return (
    <div className="App">
      <Helmet>
        <title>Interactive Rating Component</title>
      </Helmet>
      <CSSTransition
        in={showRatingComponent}
        timeout={3000}
        appear={true}
        classNames="myclass"
      >
        {showRatingComponent ? (
          <Rating handleSubmit={handleSubmit} />
        ) : (
          <Thanks rating={rating} handleBack={handleBack} />
        )}
      </CSSTransition>
    </div>
  );
}

export default App;
