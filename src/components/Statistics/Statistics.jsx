import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Good: {state.good} </p>
      <p className={css.text}>Neutral: {state.neutral} </p>
      <p className={css.text}>Bad: {state.bad} </p>
      <p className={css.text}>Total: {countTotalFeedback()} </p>
      <p className={css.text}>
        Positive feedback: {countPositiveFeedbackPercentage()}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
