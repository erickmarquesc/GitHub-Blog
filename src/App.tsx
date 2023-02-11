import { RepositoryProvider } from "./context/RepositoryContext";
import { ModalProvider } from "./context/ModalContext";
import { CardRepo } from "./components/CardRepo";
import { Modal } from "./components/Modal/Modal";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Cover } from "./components/Cover"

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