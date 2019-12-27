import React from 'react';
import Frame from '../../shared/Frame/Frame';
import Card from '../../shared/Card/Card';
import Flex from '../../shared/Flex/Flex';
import Form from '../../shared/Form/Form';
import Input from '../../shared/Input/Input';
import TextArea from '../../shared/TextArea/TextArea';
import CheckboxGroup from '../../shared/Checkbox/CheckboxGroup';
import CheckboxButton from '../../shared/CheckboxButton/CheckboxButton';

const NewReadings = () => {
  return (
    <Frame title='New reading'>
      <Form onSubmit={() => console.log('Submitted!')}>
        <Card>
          <Input
            type='text'
            name='Querent'
            label='Querent'
            helpText='The person asking the question'
            maxLength={50}
            size={40} // TODO: make this dynamic
            required
            error={false}
          />
          <br />
          <TextArea
            name='Question'
            label='Question'
            errorText='Question cannot be empty'
            rows={3}
            cols={40}
            maxLength={120}
            required
            error={false}
          />
          <br />
          <CheckboxGroup label='How will you draw the cards?'>
            <Flex>
              <CheckboxButton
                name='Cards'
                label='Use my own deck'
                value='deck'
                checked
              />
              <CheckboxButton
                name='Cards'
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
};

export default NewReadings;
