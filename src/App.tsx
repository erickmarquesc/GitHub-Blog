import { CardRepo } from "./components/CardRepo";
import { Cover } from "./components/Cover"
import { Header } from "./components/Header";
import { RepositoryProvider } from "./context";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <RepositoryProvider>
      <GlobalStyle />
      <Cover />
      <Header />
      <CardRepo />
    </RepositoryProvider>
  );
};

