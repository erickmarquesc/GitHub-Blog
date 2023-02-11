import { useEffect, useState, createContext } from "react";
import { IModalContextProps, IModalProviderProps } from "./interfaces";
import { useRepository } from "./useRepository";

export const ModalContext = createContext<IModalContextProps>({} as IModalContextProps);

export function ModalProvider({ children }: IModalProviderProps) {

  const { user } = useRepository();

  useEffect(() => { setStateModal("none") }, [user]);

  const [stateModal, setStateModal] = useState("none");

  function handleOpenModal() {
    setStateModal("flex");
  };

  function handleClouseModal() {
    setStateModal("none");
  };

  return (
    <ModalContext.Provider value={{
      handleOpenModal,
      handleClouseModal,
      stateModal,
    }}>
      {children}
    </ModalContext.Provider>
  );
};

