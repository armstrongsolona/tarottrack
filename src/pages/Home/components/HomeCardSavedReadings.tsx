import React from 'react';
import styled from 'styled-components';
import { SavedReadingsObject } from '../../Readings/SavedReadings/SavedReadingsList';
import Card from '../../../components/shared/Card/Card';
import { COLORS } from '../../../constants/colors';
import { ROUTES } from '../../../constants/routes';

interface HomeCardSavedReadingsProps {
  data: SavedReadingsObject[];
  total: number;
}

class HomeCardSavedReadings extends React.Component<
  HomeCardSavedReadingsProps,
  never
> {
  render() {
    const { total } = this.props;

    return (
      <HomeCardSavedReadingsStyles>
        <Card
          title='Saved readings'
          titleUrl={ROUTES.READINGS}
          footer={`All readings (${total})`}
          footerUrl={ROUTES.READINGS}
        >
          {this.renderList()}
        </Card>
      </HomeCardSavedReadingsStyles>
    );
  }

  renderList = () => {
    const { data } = this.props;

    const dataMarkup = data.map((dataObject) => {
      return (
        <SavedReadingsQuestionStyles>
          <span>
            <a href={dataObject.question.url}>{dataObject.question.name}</a>
          </span>
        </SavedReadingsQuestionStyles>
      );
    });

    return dataMarkup;
  };
}

const HomeCardSavedReadingsStyles = styled.div`
  width: 49%;
`;

const SavedReadingsQuestionStyles = styled.div`
  align-items: flex-end;
  border-bottom: 1px solid ${COLORS.GREY_LIGHT};
  font-size: 0.9rem;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;

  &:last-of-type {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

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
    color: ${COLORS.BLUE_BEZIQUE_MEDIUM};
  }
`;

export default HomeCardSavedReadings;
