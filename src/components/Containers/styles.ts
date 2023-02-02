import styled from "styled-components";

interface IContainerProps {
  img?: string;
};

export const Container = styled.div<IContainerProps>`
  height: 296px;
  padding: 2rem 0 2rem;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: center;
`;