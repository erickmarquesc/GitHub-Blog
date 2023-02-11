import { Container, Content, ModalContainer } from "./styles";
import { useRepository } from "../../context/useRepository";
import { useModal } from "../../context/useModal";
import { useState } from "react";

export function Modal() {

  const { stateModal, handleClouseModal } = useModal();
  const { handleConfigUserName} = useRepository();

  const [userNameConfig, setUserNameConfig] = useState('');
  
  function handleConfirmNewUser(userName : string) {
    handleConfigUserName(userName);
    setUserNameConfig('');
  };

  return (
    <Container display={stateModal}>
      <Content>
        <ModalContainer >
          <h1>Escolha um novo usuário</h1>
          <div className="inputAndButtons">
            <input
              type="text"
              value={userNameConfig}
              onChange={event => setUserNameConfig(event.target.value)}
              placeholder="GitHub Username"
            ></input>
            <div className="sectionButtons">
              <button
                className="clouseButton"
                onClick={handleClouseModal}>
                Cancelar
              </button>
              <button disabled={userNameConfig === ''}
                onClick={() => handleConfirmNewUser(userNameConfig)}
              >
                Concluir
              </button>
            </div>
          </div>
        </ModalContainer>
      </Content>
    </Container>
  );
};