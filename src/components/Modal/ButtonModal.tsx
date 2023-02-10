import { useContextSelector } from "use-context-selector";
import { ModalContext } from "../../context/ModalContext";
import { ButtonUserModal } from "./styles";

export function ButtonModal() {

  const modalState = useContextSelector(ModalContext, (context) => {
    return context.handleOpenModal
  });
  
  return (
    <>
      <ButtonUserModal onClick={modalState}>
        Trocar usuário
      </ButtonUserModal>
    </>
  )
}