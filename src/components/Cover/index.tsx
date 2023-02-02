import { Container, Content } from "../Containers/styles";
import coverImg from "../../assets/cover.svg";
import logo from "../../assets/logo.svg";

export function Cover() {
  return (
    <Container img={coverImg}>
      <Content justifyContent='center'>
        <img src={logo} />
      </Content>
    </Container>
  );
};