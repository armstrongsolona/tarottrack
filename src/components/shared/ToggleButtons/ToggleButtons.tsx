import React from 'react';
import styled from 'styled-components';
import ToggleButton from './components/ToggleButton';
import { boxShadowInsetPressed } from '../../../styles/shared';
import { borderRadiusRound } from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';
import { KEYS } from '../../../constants/keys';

interface ToggleButtonsProps {
  className?: string;
  id: string;
  options: ToggleButtonsOptions[];
  label: string;
  error?: boolean;
  errorText?: string;
  helpText?: string;
  optional?: boolean;
  onSelect(value: string | null): void;
}

interface ToggleButtonsOptions {
  label: string;
  checked: boolean;
  id: string;
  value: string;
}

interface ToggleButtonsStylesProps {
  readonly checked: boolean;
}

interface ToggleButtonStylesProps {
  readonly checked: boolean;
  readonly tabIndex: number;
}

class ToggleButtons extends React.Component<ToggleButtonsProps, never> {
  private toggleButtonsRefLeft = React.createRef<HTMLSpanElement>();
  private toggleButtonsRefRight = React.createRef<HTMLSpanElement>();

  componentDidMount() {
    const { onSelect } = this.props;
    const { toggleButtonsRefLeft, toggleButtonsRefRight } = this;

    if (toggleButtonsRefLeft.current) {
      const toggleButtonLeft = toggleButtonsRefLeft.current;

      toggleButtonLeft.addEventListener('keydown', (event: KeyboardEvent) => {
        switch (event.key) {
          case KEYS.ARROW_DOWN:
          case KEYS.ARROW_RIGHT:
          case KEYS.ARROW_UP:
          case KEYS.ARROW_LEFT:
            event.preventDefault();
            event.stopPropagation();
            const toggleButtonRight = toggleButtonsRefRight.current;

            if (toggleButtonRight) {
              toggleButtonRight.focus();
              onSelect(toggleButtonRight.getAttribute('data-value'));
            }
        }
      });

      toggleButtonLeft.addEventListener('mousedown', (event: MouseEvent) => {
        onSelect(toggleButtonLeft.getAttribute('data-value'));
      });
    }

    if (toggleButtonsRefRight.current) {
      const toggleButtonRight = toggleButtonsRefRight.current;

      toggleButtonsRefRight.current.addEventListener(
        'keydown',
        (event: KeyboardEvent) => {
          switch (event.key) {
            case KEYS.ARROW_DOWN:
            case KEYS.ARROW_RIGHT:
            case KEYS.ARROW_UP:
            case KEYS.ARROW_LEFT:
              event.preventDefault();
              event.stopPropagation();
              const toggleButtonLeft = toggleButtonsRefLeft.current;

              if (toggleButtonLeft) {
                toggleButtonLeft.focus();
                onSelect(toggleButtonLeft.getAttribute('data-value'));
              }
          }
        },
      );

      toggleButtonRight.addEventListener('mousedown', (event: MouseEvent) => {
        onSelect(toggleButtonRight.getAttribute('data-value'));
      });
    }
  }

  componentWillUnmount() {
    const { toggleButtonsRefLeft, toggleButtonsRefRight } = this;

    if (toggleButtonsRefLeft.current) {
      toggleButtonsRefLeft.current.removeEventListener('keydown', () => {});
    }

    if (toggleButtonsRefRight.current) {
      toggleButtonsRefRight.current.removeEventListener('keydown', () => {});
    }
  }

  render() {
    const {
      className,
      id,
      options,
      label,
      error,
      errorText,
      helpText,
      optional,
    } = this.props;

    const subtextMarkup = error ? (
      <ToggleButtonsErrorTextStyles>{errorText}</ToggleButtonsErrorTextStyles>
    ) : (
      <ToggleButtonsHelpTextStyles>{helpText}</ToggleButtonsHelpTextStyles>
    );

    return (
      <div role='radiogroup' aria-labelledby={id} className={className}>
        <ToggleButtonsWrapperLabelStyles id={id}>
          {label}
        </ToggleButtonsWrapperLabelStyles>
        {optional && (
          <ToggleButtonsWrapperLabelOptionalStyles>
            {' '}
            (optional)
          </ToggleButtonsWrapperLabelOptionalStyles>
        )}
        <br />
        <ToggleButtonsWrapperStyles>
          <ToggleButton
            key={options[0].id}
            id={options[0].id}
            aria-checked={options[0].checked}
            checked={options[0].checked}
            tabIndex={options[0].checked ? 0 : -1}
            ref={this.toggleButtonsRefLeft}
            dataValue={options[0].value}
          >
            {options[0].label}
          </ToggleButton>
          <ToggleButton
            key={options[1].id}
            id={options[1].id}
            aria-checked={options[1].checked}
            checked={options[1].checked}
            tabIndex={options[1].checked ? 0 : -1}
            ref={this.toggleButtonsRefRight}
            dataValue={options[1].value}
          >
            {options[1].label}
          </ToggleButton>
        </ToggleButtonsWrapperStyles>
        <br />
        {subtextMarkup}
      </div>
    );
  }
}

const ToggleButtonsWrapperStyles = styled.div`
  display: flex;
`;

const ToggleButtonsWrapperLabelStyles = styled.label`
  line-height: 2rem;
`;

const ToggleButtonsWrapperLabelOptionalStyles = styled.span`
  color: ${COLORS.GREY_MEDIUM};
  font-size: 0.8rem;
`;

const ToggleButtonsErrorTextStyles = styled.div`
  color: ${COLORS.RED};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const ToggleButtonsHelpTextStyles = styled.div`
  color: ${COLORS.GREY_MEDIUM};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export default ToggleButtons;
