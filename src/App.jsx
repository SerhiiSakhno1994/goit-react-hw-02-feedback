import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={1} onLeaveFeedback={1}></FeedbackOptions>
        </Section>
        <Section title="Statistic"></Section>
      </>
    );
  }
}

export default App;
