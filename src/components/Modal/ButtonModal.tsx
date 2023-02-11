import { useModal } from "../../context/useModal";
import { ButtonUserModal } from "./styles";

export function ButtonModal() {
  const { handleOpenModal} = useModal();
  
  return (
    <>
      <ButtonUserModal onClick={handleOpenModal}>
        Trocar usuário
      </ButtonUserModal>
    </>
  );
};