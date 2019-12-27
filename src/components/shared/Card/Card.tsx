import React from 'react';
import styled from 'styled-components';
import { borderRadiusCorner, boxShadow } from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';
import { BREAKPOINTS } from '../../../constants/breakpoints';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  titleUrl?: string;
  footer?: string;
  footerUrl?: string;
}

const Card = (props: CardProps) => {
  const { children, title, titleUrl, footer, footerUrl } = props;

  const titleMarkup = titleUrl ? <a href={titleUrl}>{title}</a> : title;
  const footerMarkup = footer ? (
    <CardFooterStyles>
      <a href={footerUrl}>{footer}</a>
    </CardFooterStyles>
  ) : null;

  return (
    <CardStyles>
      <CardTitle>{titleMarkup}</CardTitle>
      <p>{children}</p>
      {footerMarkup}
    </CardStyles>
  );
};

export const CardStyles = styled.div`
  background: ${COLORS.WHITE};
  border-radius: ${borderRadiusCorner};
  box-shadow: ${boxShadow};
  color: ${COLORS.BLACK};
  font-size: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
    border-radius: 0;
  }
`;

const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 0 1.5rem 0;
  padding: 0;

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${COLORS.BLACK};
  }
`;

export const CardSection = styled.div`
  border-top: 1px solid ${COLORS.GREY_LIGHT};
  margin-top: 1.5rem;
  padding-top: 1.5rem;
`;

export const CardFooterStyles = styled.div`
  display: flex;
  font-size: 0.9rem;
  justify-content: flex-end;
`;

export const SavedListCardStyles = styled(CardStyles)`
  margin-bottom: 0.5rem;
  padding: 1rem;
`;

export default Card;
