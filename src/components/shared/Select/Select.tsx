import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

interface SelectProps {
  name: string;
  options: SelectOptions[];
  label: string;
  labelHidden?: boolean;
  onChange(value: string): void;
}

interface SelectOptions {
  displayText: string;
  value: string;
}

class Select extends React.Component<SelectProps, never> {
  render() {
    const { name, label, labelHidden } = this.props;

    const labelMarkup = labelHidden ? (
      <SelectLabel className='SelectLabel--Visually-Hidden'>
        {label}
      </SelectLabel>
    ) : (
      <SelectLabel>{label}</SelectLabel>
    );

    return (
      <>
        {labelMarkup}
        <br />
        <SelectStyles name={name} onChange={this.handleChange}>
          {this.renderOptions()}
        </SelectStyles>
      </>
    );
  }

  renderOptions = () => {
    const { options } = this.props;

    const optionsMarkup = options.map((option: SelectOptions) => {
      return (
        <option value={option.value} key={option.value}>
          {option.displayText}
        </option>
      );
    });

    return optionsMarkup;
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { onChange } = this.props;

    return onChange(event.currentTarget.value);
  };
}

const SelectStyles = styled.select`
  width: 20rem;
  font-size: 1rem;
  border: 1px solid ${COLORS.GREY_SHADOW};
`;

const SelectLabel = styled.label`
  line-height: 2rem;
`;

export default Select;
