import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/shared/Card/Card';
import Input from '../../../components/shared/Input/Input';
import TextArea from '../../../components/shared/TextArea/TextArea';
import ToggleButtons from '../../../components/shared/ToggleButtons/ToggleButtons';
import Select from '../../../components/shared/Select/Select';
import { DrawMethod } from '../../../types/types';

interface NewReadingStep1Props {
  querent: string;
  question: string;
  drawMethod: DrawMethod;
  spreadUUID: string;
  handleUpdateQuerent(querent: string): void;
  handleUpdateQuestion(question: string): void;
  handleUpdateDrawMethod(drawMethod: string): void;
  handleUpdateSpreadUUID(spreadUUID: string): void;
}

export default function NewReadingStep1(props: NewReadingStep1Props) {
  const {
    querent,
    question,
    drawMethod,
    spreadUUID,
    handleUpdateQuerent,
    handleUpdateQuestion,
    handleUpdateDrawMethod,
    handleUpdateSpreadUUID,
  } = props;

  return (
    <>
      <Input
        label='Querent'
        type='text'
        name='querent'
        helpText=' '
        errorText={`Please enter the querent's name`}
        maxLength={50}
        size={40} // TODO: make this dynamic
        required
        error={false} // TODO: make this dynamic
        value={querent}
        onChange={handleUpdateQuerent}
      />
      <br />
      <TextArea
        label='Question'
        name='question'
        helpText=' '
        errorText='Please enter the question'
        rows={3}
        cols={60}
        maxLength={120}
        required
        error={false} // TODO: make this dynamic
        value={question}
        onChange={handleUpdateQuestion}
      />
      <br />
      <ToggleButtons
        label='How will you draw the cards?'
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
        onSelect={handleUpdateDrawMethod}
      />
      <Select
        label='Spread'
        name='new-reading__spread'
        options={[
          { value: '93849320809', displayText: 'Celtic Cross' },
          { value: '84903284089', displayText: 'One Card' },
          {
            value: '34890328499',
            displayText: 'Past / Present / Future',
          },
        ]}
        onChange={handleUpdateSpreadUUID}
      />
      <Input
        label='Date'
        labelHidden
        type='hidden'
        name='date'
        error={false} // TODO: make this dynamic
        value={new Date().getTime().toString()}
        onChange={() => {}}
      />
    </>
  );
}
