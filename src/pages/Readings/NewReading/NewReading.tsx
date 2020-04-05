import React, { useState } from 'react';
import Frame from '../../../components/shared/Frame/Frame';
import Card from '../../../components/shared/Card/Card';
import Form from '../../../components/shared/Form/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import NewReadingStep1 from './NewReadingStep1';
import NewReadingStep2Deck from './NewReadingStep2Deck';
import NewReadingStep2Digital from './NewReadingStep2Digital';
import { DrawMethod } from '../../../types/types';

export default function NewReading() {
  const [step, changeStep] = useState(1);
  const [querent, updateQuerent] = useState('');
  const [question, updateQuestion] = useState('');
  const [drawMethod, updateDrawMethod] = useState('deck' as DrawMethod);
  const [spreadUUID, updateSpreadUUID] = useState('');
  console.log('step', step);

  const nextStep = (event: React.MouseEvent) => {
    event.preventDefault();

    changeStep(step + 1);
  };

  const previousStep = (event: React.MouseEvent) => {
    event.preventDefault();

    changeStep(step - 1);
  };

  const handleUpdateQuerent = (querent: string) => {
    updateQuerent(querent);
  };

  const handleUpdateQuestion = (question: string) => {
    updateQuestion(question);
  };

  const handleUpdateDrawMethod = (drawMethod: DrawMethod) => {
    return updateDrawMethod(drawMethod);
  };

  const handleUpdateSpreadUUID = (spreadUUID: string) => {
    return updateSpreadUUID(spreadUUID);
  };

  let secondaryButtonText = (
    <>
      Next &nbsp; <FontAwesomeIcon icon={faCaretRight} />
    </>
  );
  let secondaryButtonOnClick = nextStep;

  if (step === 2) {
    secondaryButtonText = (
      <>
        <FontAwesomeIcon icon={faCaretLeft} /> &nbsp; Previous
      </>
    );
    secondaryButtonOnClick = previousStep;
  }

  return (
    <Frame title='New reading'>
      <Card title=''>
        <Form
          submitButtonText='Save'
          hideSubmitButton={step === 1}
          secondaryButtonText={secondaryButtonText}
          secondaryButtonOnClick={secondaryButtonOnClick}
        >
          {step === 1 && (
            <NewReadingStep1
              querent={querent}
              question={question}
              drawMethod={drawMethod}
              spreadUUID={spreadUUID}
              handleUpdateQuerent={handleUpdateQuerent}
              handleUpdateQuestion={handleUpdateQuestion}
              handleUpdateDrawMethod={handleUpdateDrawMethod}
              handleUpdateSpreadUUID={handleUpdateSpreadUUID}
            />
          )}

          {step === 2 && drawMethod === ('deck' as DrawMethod) && (
            <NewReadingStep2Deck querent={querent} spread={spreadUUID} />
          )}

          {step === 2 && drawMethod === ('digital' as DrawMethod) && (
            <NewReadingStep2Digital querent={querent} spread={spreadUUID} />
          )}
        </Form>
      </Card>
    </Frame>
  );
}
