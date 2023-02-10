import { createContext, useContextSelector } from "use-context-selector";
import { RepositoryContext } from "./RepositoryContext";
import { ReactNode, useEffect, useState } from "react";

export interface IModalContextType {
  handleClouseModal: () => void;
  handleOpenModal: () => void;
  stateModal: string;
};

export interface IModalProviderProps {
  children: ReactNode;
};

export const ModalContext = createContext({} as IModalContextType);

export function ModalProvider({ children }: IModalProviderProps) {

  const user = useContextSelector(RepositoryContext, (context) => {
    return context.user
  });

  useEffect(() => { setStateModal("none") }, [user])

  const [stateModal, setStateModal] = useState("none");

  function handleOpenModal() {
    setStateModal("flex")
  }

  function handleClouseModal() {
    setStateModal("none")
  }

  return (
    <ModalContext.Provider value={{
      handleOpenModal,
      handleClouseModal,
      stateModal
    }}>
      {children}
    </ModalContext.Provider>
  );
};