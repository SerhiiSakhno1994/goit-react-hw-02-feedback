import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.FeedbackOptions}>
      <button className={s.button}>Good</button>
      <button className={s.button}>Neutral</button>
      <button className={s.button}>Bad</button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.number,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
