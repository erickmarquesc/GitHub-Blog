import styled from "styled-components";

export const CardRepoContent = styled.div`
  width: 416px;
  margin: 16px;
  height: 260px;
  padding: 32px;
  border-radius: 8px;
  background: #112131;

  header{
    display: flex;
    flex-direction: row;

    h1{
      width: 283px;
      font-size: 20px;
    };

    strong{
      font-size: 14px;
    };
  };

  main{
    margin-top: 20px;
    overflow: hidden; // Removendo barra de rolagem
    display: -webkit-box;
    -webkit-line-clamp: 4; // Quantidade de linhas
    text-overflow: ellipsis; // Adicionando "..." ao final
    -webkit-box-orient: vertical; 
  };
`;