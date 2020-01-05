import React from 'react';
import { connect } from 'react-redux';
import Frame from '../../components/shared/Frame/Frame';
import Card from '../../components/shared/Card/Card';
import Form from '../../components/shared/Form/Form';
import Input from '../../components/shared/Input/Input';
import TextArea from '../../components/shared/TextArea/TextArea';
import ToggleButtons from '../../components/shared/ToggleButtons/ToggleButtons';
import Select from '../../components/shared/Select/Select';
import {
  updateQuerent,
  updateQuestion,
  updateDrawMethod,
  updateTimestamp,
  updateSpreadUUID,
  updateTopic,
  updateCardsDrawn,
} from './redux/actions';
import {
  getNewReadingQuerent,
  getNewReadingQuestion,
  getNewReadingDrawMethod,
  getNewReadingTimestamp,
  getNewReadingSpreadUUID,
  getNewReadingTopic,
  getNewReadingCardsDrawn,
} from './redux/selectors';
import { ReadingState, DrawMethod } from './redux/types';
import { Topic } from '../Spreads/redux/types';

interface NewReadingProps {
  querent: string;
  question: string;
  drawMethod: DrawMethod;
  timestamp: Date;
  spreadUUID: string;
  topic: Topic;
  cardsDrawn: number[];
  onUpdateQuerent: any;
  onUpdateQuestion: any;
  onUpdateDrawMethod: any;
  onUpdateTimestamp: any;
  onUpdateSpreadUUID: any;
  onUpdateTopic: any;
  onUpdateCardsDrawn: any;
}

class NewReading extends React.Component<NewReadingProps, never> {
  render() {
    const {
      querent,
      question,
      drawMethod,
      timestamp,
      spreadUUID,
      topic,
      cardsDrawn,
    } = this.props;

    return (
      <Frame title='New reading'>
        <Form onSubmit={() => console.log('Submitted!')}>
          <Card>
            <Input
              type='text'
              name='querent'
              label='Querent'
              helpText='The person asking the question'
              maxLength={50}
              size={40} // TODO: make this dynamic
              required
              error={false}
              value={querent}
              onChange={this.handleUpdateQuerent}
            />
            <br />
            <TextArea
              name='question'
              label='Question'
              errorText='Question cannot be empty'
              rows={3}
              cols={40}
              maxLength={120}
              required
              error={false}
              value={question}
              onChange={this.handleUpdateQuestion}
            />
            <br />
            <ToggleButtons
              id='new-reading__draw-method'
              options={[
                {
                  label: 'Use my own deck',
                  checked: drawMethod === 'deck',
                  id: 'new-reading__draw-method--deck',
                  value: 'deck',
                },
                {
                  label: 'Use the digital deck',
                  checked: drawMethod === 'digital',
                  id: 'new-reading__draw-method--digital',
                  value: 'digital',
                },
              ]}
              label='How will you draw the cards?'
              onSelect={this.handleUpdateDrawMethod}
            />
            <Select
              label='Spread'
              name='new-reading__spread'
              options={[
                { value: '93849320809', displayText: 'Celtic Cross' },
                { value: '84903284089', displayText: 'One Card' },
                {
                  value: '34890328499',
                  displayText: 'Past Present Future',
                },
              ]}
              onChange={this.handleUpdateSpreadUUID}
            />
          </Card>
        </Form>
      </Frame>
    );
  }

  handleUpdateQuerent = (value: string) => {
    const { onUpdateQuerent } = this.props;
    return onUpdateQuerent(value);
  };

  handleUpdateQuestion = (value: string) => {
    const { onUpdateQuestion } = this.props;
    return onUpdateQuestion(value);
  };

  handleUpdateDrawMethod = (value: DrawMethod) => {
    const { onUpdateDrawMethod } = this.props;
    return onUpdateDrawMethod(value);
  };

  handleUpdateTimestamp = (value: Date) => {
    const { onUpdateTimestamp } = this.props;
    return onUpdateTimestamp(value);
  };

  handleUpdateSpreadUUID = (value: string) => {
    const { onUpdateSpreadUUID } = this.props;
    return onUpdateSpreadUUID(value);
  };

  handleUpdateTopic = (value: Topic) => {
    const { onUpdateTopic } = this.props;
    return onUpdateTopic(value);
  };

  handleUpdateCardsDrawn = (value: number) => {
    const { onUpdateCardsDrawn } = this.props;
    return onUpdateCardsDrawn(value);
  };
}

const mapStateToProps = (state: ReadingState) => ({
  querent: getNewReadingQuerent(state),
  question: getNewReadingQuestion(state),
  drawMethod: getNewReadingDrawMethod(state),
  timestamp: getNewReadingTimestamp(state),
  spreadUUID: getNewReadingSpreadUUID(state),
  topic: getNewReadingTopic(state),
  cardsDrawn: getNewReadingCardsDrawn(state),
});

const mapDispatchToProps = {
  onUpdateQuerent: updateQuerent,
  onUpdateQuestion: updateQuestion,
  onUpdateDrawMethod: updateDrawMethod,
  onUpdateTimestamp: updateTimestamp,
  onUpdateSpreadUUID: updateSpreadUUID,
  onUpdateTopic: updateTopic,
  onUpdateCardsDrawn: updateCardsDrawn,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewReading);
