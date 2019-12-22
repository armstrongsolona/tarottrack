import React from 'react';
import styled from 'styled-components';
import { SavedListCardStyles } from '../../shared/Card/Card';
import { COLORS } from '../../../constants/colors';

export type SpreadsObject = {
  author: string;
  description: string;
  name: string;
  positions: number;
  url: string;
};

interface SpreadsListProps {
  data: SpreadsObject[];
}

export type ListType = 'readings' | 'spreads';

class SpreadsList extends React.Component<SpreadsListProps, never> {
  render() {
    // const isMobileSize = window.innerWidth <= BREAKPOINTS.MOBILE_MAX;

    return this.renderList();
  }

  renderList = () => {
    const { data } = this.props;

    const dataMarkup = data.map((dataObject) => {
      const { author, name, positions, url } = dataObject;
      const positionsPlural = positions > 1 ? 'positions' : 'position';

      return (
        <SavedListCardStyles>
          <SpreadsQuestionStyles>
            <span>
              <a href={url}>{name}</a>
            </span>
          </SpreadsQuestionStyles>
          <SpreadsSecondaryInfoStyles>
            <span>{`${positions} ${positionsPlural}`}</span>
            <span>{author}</span>
          </SpreadsSecondaryInfoStyles>
        </SavedListCardStyles>
      );
    });

    return dataMarkup;
  };
}

const SpreadsQuestionStyles = styled.div`
  align-items: flex-end;
  display: flex;
  font-weight: 500;
  justify-content: flex-start;
  margin-bottom: 0.5rem;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${COLORS.BLACK};
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }
`;

const SpreadsSecondaryInfoStyles = styled.div`
  color: ${COLORS.GREY_DARK};
  display: flex;
  font-size: 0.8rem;

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${COLORS.GREY_DARK};
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }

  span {
    margin-right: 2rem;
  }
`;

export default SpreadsList;
