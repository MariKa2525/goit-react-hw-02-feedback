import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Title } from './Title/Title';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  onLeaveFeedback = evt => {
    this.showStatistics();
    const name = evt.target.name;
    this.setState(prevState => {
      return { [name]: (prevState[name] += 1) };
    });
  };

  showStatistics = () => {
    this.setState({ visible: true });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage =
      +Math.round(
        (this.state.good * 100) /
          (this.state.good + this.state.neutral + this.state.bad)
      ) + '%';
    return percentage;
  };

  render() {
    return (
      <>
        <Title />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <SectionTitle />
        
        {this.state.visible ? (
          <Statistics
            state={this.state}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        ) : <Notification />}
      </>
    );
  }
}
