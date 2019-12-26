import React from 'react';
import styled from 'styled-components';
import { SpreadsObject } from '../../Spreads/SpreadsList';
import Card from '../../../shared/Card/Card';
import { COLORS } from '../../../../constants/colors';
import { ROUTES } from '../../../../constants/routes';

interface HomeCardSpreadsProps {
  data: SpreadsObject[];
  total: number;
}

class HomeCardSpreads extends React.Component<HomeCardSpreadsProps, never> {
  render() {
    const { total } = this.props;

    return (
      <HomeCardSpreadsStyles>
        <Card
          title='Spreads'
          titleUrl={ROUTES.SPREADS}
          footer={`All spreads (${total})`}
          footerUrl={ROUTES.SPREADS}
        >
          {this.renderList()}
        </Card>
      </HomeCardSpreadsStyles>
    );
  }

  renderList = () => {
    const { data } = this.props;

    const dataMarkup = data.map((dataObject, dataObjectIndex) => {
      const { name, positions, url } = dataObject;
      const positionsPlural = positions > 1 ? 'positions' : 'position';

      return (
        <SpreadsNameStyles>
          <span>
            <a href={url}>{name}</a>
          </span>
          <span>{`${positions} ${positionsPlural}`}</span>
        </SpreadsNameStyles>
      );
    });

    return dataMarkup;
  };
}
const HomeCardSpreadsStyles = styled.div`
  width: 49%;
`;

const SpreadsNameStyles = styled.div`
  align-items: flex-end;
  border-bottom: 1px solid ${COLORS.GREY_LIGHT};
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
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

export default HomeCardSpreads;
