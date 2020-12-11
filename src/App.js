import { Component } from 'react';
import Section from './components/Feedback/Section/Section';


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
clickActiveItem = item => {
    this.setState(PrevState => ({
      [item]: PrevState[item] + 1,
    }));
};
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.clickActiveItem}
            getNameFeedback={this.getNameFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedback()}
            />
          )}
        </Section>
      </div>
    );
  }
}