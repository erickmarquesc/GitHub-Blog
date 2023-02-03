import styled from "styled-components";

export const CardRepoContent = styled.div`
  width: 416px;
  margin: 16px;
  height: 260px;
  padding: 32px;
  border-radius: 8px;
  background: #112131;
  border-left: solid 2px #3A536B ;

    a{
      color: #fff;
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

  transition: border-left 1s;

  :hover{
    cursor: pointer;
    border-left: solid 2px #C4D4E3 ;
  }

  header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1{
      width: 210px;
      font-size: 20px;
    };

    strong{
      color: #7B96B2;
      font-size: 14px;
    };
  };

  main{
    margin: 20px 0;

    p{
      color: #AFC2D4;
      font-size: 16px;
      overflow: hidden; // Removendo barra de rolagem
      display: -webkit-box;
      -webkit-line-clamp: 4; // Quantidade de linhas
      text-overflow: ellipsis; // Adicionando "..." ao final
      -webkit-box-orient: vertical; 
    }
    label{
      color: #7B96B2;
    }
  };

  footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    

    ul{
      gap: 12px;
      list-style-type: none;
    }
  }
`;