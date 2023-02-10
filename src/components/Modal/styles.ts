import styled, { css } from "styled-components";

interface IModalContainerProps {
  display: "none" | "flex" | string
}

export const Container = styled.div<IModalContainerProps>`
  height: 296px;
  padding: 2rem 0 2rem;

  
  ${(props) => props.display === 'none' ? css`
  display: none;
  transition: display 10s;
  `: props.display === 'flex' && css`
        display: flex;
  transition: display 10s;

  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 1120px;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  gap: 32px;
  width: 864px;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  border-radius: 10px;
  background: #0B1B2B;
  position: initial;

  h1{
    font-size: 1.5rem;
  }
  .inputAndButtons{
    display: flex;
    justify-content: space-between;

    input{
      width: 70%;
      padding: 12px;
      border-radius: 6px;
      color: #0B1B2B;
    }
  }

  .sectionButtons{
    display: flex;
    gap: 12px;
    
    button{
      cursor: pointer;
      padding: 12px;
      border-radius: 6px;
      width: 6rem;
      font-weight: 400;
      transition: 1s;
      font: 700 1rem 'Nunito', sans-serif;
      background: transparent;
      color: white;
      border: solid 1px #fff;

      :hover{
        background: red;
        border-color: red;
      }

      :hover:not(.clouseButton){
        background: green;
        border-color: green;
      }
    }
  }

`;

export const ButtonUserModal = styled.button`
  padding: 5px;
  border: solid 1px #3294F8;
  border-radius: 6px;
  background: transparent;
  color: white;
  font-size: 0.75rem;
  color: #3294F8;
  cursor: pointer;

  transition: filter 1s;

  :hover{
    filter: brightness(80%);
  }
`;