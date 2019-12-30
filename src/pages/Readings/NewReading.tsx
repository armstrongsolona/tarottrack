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
import { saveNewReading, Reading } from './redux/actions';

interface NewReadingProps {
  readings: Reading[];
  onUpdateNewReading: any;
}

interface NewReadingState {
  querentValue: string;
  questionValue: string;
  drawMethodValue: string;
  spread: string;
  timestamp: Date;
  topic: string;
}

class NewReading extends React.Component<NewReadingProps, NewReadingState> {
  state: NewReadingState = {
    querentValue: '',
    questionValue: '',
    drawMethodValue: '',
    spread: '',
    timestamp: new Date(),
    topic: '',
  };

  render() {
    const { readings, onUpdateNewReading } = this.props;
    const {
      querentValue,
      questionValue,
      drawMethodValue,
      spread,
      timestamp,
      topic,
    } = this.state;

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
              value={querentValue}
              onChange={this.handleOnChangeQuerentValue}
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
              value={questionValue}
              onChange={this.handleOnChangeQuestionValue}
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
                  value='ditigal'
                  checked={false}
                />
              </Flex>
            </CheckboxGroup>
          </Card>
        </Form>
      </Frame>
    );
  }

  handleOnChangeQuerentValue = (value: string) => {
    this.setState({ querentValue: value });
  };

  handleOnChangeQuestionValue = (value: string) => {
    this.setState({ questionValue: value });
  };
}

const mapDispatchToProps = {
  onUpdateNewReading: saveNewReading,
};

export default connect(null, mapDispatchToProps)(NewReading);
