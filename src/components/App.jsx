import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackBtns';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section-title';
import Notification from './Notification/Notification';
import { Container } from './App.styled';

function App() {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const feedBackState = { good, neutral, bad };

  const handleButton = item => {
    switch (item) {
      case 'good':
        setgood(prevState => prevState + 1);
        break;
      case 'neutral':
        setneutral(prevState => prevState + 1);
        break;
      case 'bad':
        setbad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(feedBackState).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0
      ? 0
      : Math.round((feedBackState['good'] / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedBackState)}
          onLeaveFeedback={handleButton}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedBackState.good}
            neutral={feedBackState.neutral}
            bad={feedBackState.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        )}
      </Section>
    </Container>
  );
}

export default App;
