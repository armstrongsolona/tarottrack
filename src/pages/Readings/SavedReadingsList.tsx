import React from 'react';
import styled from 'styled-components';
import Tag from '../../components/shared/Tag/Tag';
import { Topic } from '../Spreads/redux/types';
import { SavedListCardStyles } from '../../components/shared/Card/Card';
import { COLORS } from '../../constants/colors';

export type SavedReadingsQuerentObject = {
  name: string;
  url: string;
};

export type SavedReadingsQuestionObject = {
  name: string;
  url: string;
};

export type SavedReadingsSpreadObject = {
  name: string;
  url: string;
};

export type SavedReadingsObject = {
  date: string;
  querent: SavedReadingsQuerentObject;
  question: SavedReadingsQuestionObject;
  spread: SavedReadingsSpreadObject;
  topic: Topic;
};

interface SavedReadingsListProps {
  data: SavedReadingsObject[];
}

export type ListType = 'readings' | 'spreads';

class SavedReadingsList extends React.Component<SavedReadingsListProps, never> {
  render() {
    // const isMobileSize = window.innerWidth <= BREAKPOINTS.MOBILE_MAX;

    return this.renderList();
  }

  renderList = () => {
    const { data } = this.props;

    const dataMarkup = data.map((dataObject, dataObjectIndex) => {
      return (
        <SavedListCardStyles>
          <SavedReadingsQuestionStyles>
            <span>
              <a href={dataObject.question.url}>{dataObject.question.name}</a>
            </span>
          </SavedReadingsQuestionStyles>
          <SavedReadingsSecondaryInfoStyles>
            <span>{dataObject.date}</span>
            <span>
              <a href={dataObject.querent.url}>{dataObject.querent.name}</a>
            </span>
            <span>
              <a href={dataObject.spread.url}>{dataObject.spread.name}</a>
            </span>
          </SavedReadingsSecondaryInfoStyles>
        </SavedListCardStyles>
      );
    });

    return dataMarkup;
  };
}

const SavedReadingsQuestionStyles = styled.div`
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

const SavedReadingsSecondaryInfoStyles = styled.div`
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

export default SavedReadingsList;
