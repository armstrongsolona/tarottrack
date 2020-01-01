import React from 'react';
import { connect } from 'react-redux';
import Frame from '../../components/shared/Frame/Frame';
import Card from '../../components/shared/Card/Card';
import Flex from '../../components/shared/Flex/Flex';
import Form from '../../components/shared/Form/Form';
import Input from '../../components/shared/Input/Input';
import TextArea from '../../components/shared/TextArea/TextArea';
import CheckboxGroup from '../../components/shared/Checkbox/CheckboxGroup';
import CheckboxButton from '../../components/shared/CheckboxButton/CheckboxButton';
import {
  updateQuerent,
  updateQuestion,
  updateDrawMethod,
  updateTimestamp,
  updateSpreadUUID,
  updateTopic,
  updateCardsDrawn,
} from './redux/actions';
import { getNewReadingState } from './redux/selectors';
import { Reading, NewReadingState, DrawMethod } from './redux/types';
import { Topic } from '../Spreads/redux/types';

interface NewReadingProps {
  newReading: Reading;
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
    const { newReading, onUpdateQuerent } = this.props;

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
              value={newReading.querent}
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
              value={newReading.question}
              onChange={this.handleUpdateQuestion}
            />
            <br />
            <CheckboxGroup label='How will you draw the cards?'>
              <Flex>
                <CheckboxButton
                  name='drawMethod'
                  label='Use my own deck'
                  value='deck'
                  checked
                />
                <CheckboxButton
                  name='drawMethod'
                  label='Use the digital deck'
                  value='digital'
                  checked={false}
                />
              </Flex>
            </CheckboxGroup>
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

  handleUpdateSpreadUUID = (value: number) => {
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

const mapStateToProps = (state: NewReadingState) => ({
  newReading: getNewReadingState(state),
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
