import { RepositoryContext } from "../../context/RepositoryContext";
import { Container, Content, ModalContainer } from "./styles";
import { useContextSelector } from "use-context-selector";
import { ModalContext } from "../../context/ModalContext";
import { useState } from "react";

export function Modal() {

  const modalState = useContextSelector(ModalContext, (context) => {
    return context.stateModal
  });

  const clouseModal = useContextSelector(ModalContext, (context) => {
    return context.handleClouseModal
  });

  const userName = useContextSelector(RepositoryContext, (context) => {
    return context.handleConfigUserName
  });

  const [userNameConfig, setUserNameConfig] = useState('');

  return (
    <Container display={modalState}>
      <Content>
        <ModalContainer >

          <h1>Escolha um novo usuário</h1>
          <div className="inputAndButtons">

            <input
              type="text"
              value={userNameConfig}
              onChange={event => setUserNameConfig(event.target.value)}
              placeholder="erickmarquesc"
            ></input>

            <div className="sectionButtons">
              <button
                className="clouseButton"
                onClick={clouseModal}>
                Cancelar
              </button>
              <button
                onClick={() => userName(userNameConfig)}
              >
                Concluir
              </button>
            </div>
            
          </div>

        </ModalContainer>
      </Content>
    </Container>

  )
}