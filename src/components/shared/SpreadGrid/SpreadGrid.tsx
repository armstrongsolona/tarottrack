import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

interface CardGrid {
  gridColumnStart: number;
  gridColumnEnd: number;
  gridRowStart: number;
  gridRowEnd: number;
  imgURL: string;
  imgAlt: string;
  positionName: string;
}

interface SpreadGridProps {
  columns: number;
  rows: number;
  cards: CardGrid[];
}

const SpreadGrid = (props: SpreadGridProps) => {
  const { cards } = props;

  return (
    <Grid>
      {cards.map((card: CardGrid, index: number) => {
        console.log('card', card);
        return (
          <CardGridStyles
            gridColumnStart={card.gridColumnStart}
            gridColumnEnd={card.gridColumnEnd}
            gridRowStart={card.gridRowStart}
            gridRowEnd={card.gridRowEnd}
            imgURL={card.imgURL}
            imgAlt={card.imgAlt}
            positionName={card.positionName}
            key={index}
          >
            <CardImgStyles
              src={card.imgURL}
              alt={`Position ${index + 1}, ${card.positionName}: ${
                card.imgAlt
              }`}
            />
          </CardGridStyles>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
`;

const CardGridStyles = styled.div<CardGrid>`
  ${(props) =>
    props.gridColumnStart && `grid-column-start: ${props.gridColumnStart}`};
  ${(props) =>
    props.gridColumnEnd && `grid-column-end: ${props.gridColumnEnd}`};
  ${(props) => props.gridRowStart && `grid-row-start: ${props.gridRowStart}`};
  ${(props) => props.gridRowEnd && `grid-row-end: ${props.gridRowEnd}`};
`;

const CardImgStyles = styled.img`
  width: 80px;
  height: 150px;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid ${COLORS.GREY_SHADOW};
`;

export default SpreadGrid;
