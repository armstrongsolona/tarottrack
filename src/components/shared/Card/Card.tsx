import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

const Card = (props: CardProps) => {
  const { children, title } = props;

  return (
    <CardStyles>
      <CardTitle>{title}</CardTitle>
      <p>{children}</p>
    </CardStyles>
  );
};

const CardStyles = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 0.25rem;
  box-shadow: 2px 2px 5px ${COLORS.GREY_SHADOW};
  color: ${COLORS.BLACK};
  font-size: 1rem;
  max-width: 34rem;
  width: 100%;
  padding: 1.5rem;
  text-align: left;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0 0 1.5rem 0;
  padding: 0;
`;

export const CardSection = styled.div`
  border-top: 1px solid ${COLORS.GREY_LIGHT};
  margin-top: 1.5rem;
  padding-top: 1.5rem;
`;

export default Card;