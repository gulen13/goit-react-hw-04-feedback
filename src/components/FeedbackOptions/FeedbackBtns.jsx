import PropTypes from 'prop-types';
import { BtnList, BtnItem } from './FeedbackBtns.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(item => (
        <li key={item}>
          <BtnItem
            type="button"
            onClick={() => {
              onLeaveFeedback(item);
            }}
          >
            {item}
          </BtnItem>
        </li>
      ))}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
