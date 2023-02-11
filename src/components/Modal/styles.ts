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
  position: initial;
  padding: 32px 40px;
  border-radius: 10px;
  background: #0B1B2B;
  flex-direction: column;

  h1{
    font-size: 1.5rem;
  }
  .inputAndButtons{
    display: flex;
    justify-content: space-between;

    input{
      width: 70%;
      padding: 12px;
      color: #0B1B2B;
      border-radius: 6px;
    }
  }

  .sectionButtons{
    gap: 12px;
    display: flex;
    
    button{
      width: 6rem;
      color: white;
      padding: 12px;
      transition: 1s;
      cursor: pointer;
      font-weight: 400;
      border-radius: 6px;
      border: solid 1px #fff;
      background: transparent;
      font: 700 1rem 'Nunito', sans-serif;

      :hover{
        background: red;
        border-color: red;
      }

      :hover:not(.clouseButton){
        background: green;
        border-color: green;
      }

      :disabled{
        cursor: not-allowed;
        background: #0B1B2B;
      }
      
    }
  }

`;

export const ButtonUserModal = styled.button`
  padding: 5px;
  color: white;
  color: #3294F8;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.75rem;
  background: transparent;
  border: solid 1px #3294F8;

  transition: filter 1s;

  :hover{
    filter: brightness(80%);
  }
`;