import { CardRepo } from "./components/CardRepo";
import { Cover } from "./components/Cover"
import { Header } from "./components/Header";
import { Modal } from "./components/Modal/Modal";
import { ModalProvider } from "./context/ModalContext";
import { RepositoryProvider } from "./context/RepositoryContext";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <RepositoryProvider>
      <ModalProvider>
        <GlobalStyle />
        <Cover />
        <Header />
        <Modal />
        <CardRepo />
      </ModalProvider>
    </RepositoryProvider>
  );
};

