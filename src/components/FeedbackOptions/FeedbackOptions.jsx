import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={s.FeedbackOptions}>
      <button onClick={onLeaveFeedback} className={s.button}>
        Good
      </button>
      <button onClick={onLeaveFeedback} className={s.button}>
        Neutral
      </button>
      <button onClick={onLeaveFeedback} className={s.button}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
