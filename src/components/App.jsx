import { useReducer } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackBtns';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section-title';
import Notification from './Notification/Notification';
import { Container } from './App.styled';

const reducer = (state, action) => {
  switch (action.type) {
    case 'good':
      return {
        ...state,
        good: state.good + action.payload,
      };
    case 'neutral':
      return {
        ...state,
        neutral: state.neutral + action.payload,
      };
    case 'bad':
      return {
        ...state,
        bad: state.bad + action.payload,
      };
    default:
      throw new Error();
  }
};

function App() {
  const [state, setstate] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleButton = item => {
    setstate({ type: item, payload: +1 });
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0
      ? 0
      : Math.round((state['good'] / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleButton}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        )}
      </Section>
    </Container>
  );
}

export default App;
