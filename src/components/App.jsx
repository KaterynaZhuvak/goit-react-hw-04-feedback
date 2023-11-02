import React, { useState } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAddMark = e => {
    const option = e.target.name;

    switch (option) {
      case 'good': {
        setGood(prevState => prevState + 1);
        break;
      }
      case 'neutral': {
        setNeutral(prevState => prevState + 1);
        break;
      }
      case 'bad': {
        setBad(prevState => prevState + 1);
        break;
      }
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback!">
        <FeedbackOptions onLeaveFeedback={handleAddMark}></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </div>
  );
};
