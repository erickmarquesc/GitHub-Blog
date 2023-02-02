import styled, { css } from "styled-components";

interface IContainerProps {
  img?: string;
  variant?: "inHeader";
};

interface IContentProps{
  justifyContent: "center" | "flex-start";
};

export const Container = styled.div<IContainerProps>`
  height: 296px;
  padding: 2rem 0 2rem;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 100%;

  ${(props) => props.variant === 'inHeader' ? css`
      margin-top: -150px;
  `: props.variant === 'notHeader' && css`
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: center;
`;