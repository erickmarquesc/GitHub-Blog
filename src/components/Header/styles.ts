import styled from "styled-components";

export const HeaderBox = styled.div`
  gap: 32px;
  color: #fff;
  width: 864px;
  display: flex;
  padding: 32px 40px;
  border-radius: 10px;
  background: #0B1B2B;
  margin-top: -150px;

  .InfoConteiner{
    display: flex;
    flex-direction: column;
  };
  
  section{
    gap: 8px;
    display: flex;
    margin-bottom: 8px;
    align-items: center;
    justify-content: space-between;

    a{
      color: #3294F8;
      text-decoration: none;
    }

    /* link que foi visitado */
    a:visited {
      color: none;
    }

    /* mouse over */
    a:hover {
      color: #fff;
    }

    /* link selecionado */
    a:active {
      color: #fff;
    }

    h1{
      font-size: 1.5rem;
    }

    strong{
      font-size: 0.75rem;
    }
  };

  footer{
    gap: 24px;
    display: flex;
    margin-top: 24px;
  }
`;

export const IconsItem = styled.div`
  gap: 8px;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;