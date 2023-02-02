import { CardRepo } from "./components/CardRepo";
import { Cover } from "./components/Cover"
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <>
      <GlobalStyle />
      <Cover />
      <Header />
      <CardRepo />
    </>
  );
};

