import greeting from '../images/illustration-thank-you.svg';

export const Thanks = ({ rating, handleBack }) => {
  return (
    <article className="card">
      {/* <!-- Thank you state start --> */}
      <button className="card__button--back" onClick={handleBack}>
        <svg
          fill="#ffffff"
          viewBox="0 0 24 24"
          version="1.2"
          baseProfile="tiny"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path d="M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z" />
          </g>
        </svg>
      </button>
      <img className="card__greeting" src={greeting} alt="Greeting Image" />
      <span className="card__selection">
        You selected {rating} out of 5
      </span>{' '}
      <h1 className="card__thanks">Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      {/* <!-- Thank you state end --> */}
    </article>
  );
};