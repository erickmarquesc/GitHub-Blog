import { IoPeople, IoBusiness, IoArrowRedoCircle } from "react-icons/io5";
import { Container, Content } from "../Containers/styles";
import { HeaderBox, IconsItem } from "./styles";
import { GoMarkGithub } from "react-icons/go";
import imagem from "../../assets/logo.svg";

export function Header() {
  return (
    <Container variant="inHeader">
      <Content justifyContent='center'>
        <HeaderBox>
          <img src={imagem} />
          <div className="InfoConteiner">
            <section>
              <h1>Erick Maruqes Cabral</h1>
              <a href="https://github.com/erickmarquesc/">
                <section>
                  <strong>github</strong>
                  <IoArrowRedoCircle />
                </section>
              </a>
            </section>
            <text>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</text>
            <footer>
              <IconsItem>
                <GoMarkGithub />
                erickmarquesc
              </IconsItem>

              <IconsItem>
                <IoBusiness />
                erickmarquesc
              </IconsItem>

              <IconsItem>
                <IoPeople />
                erickmarquesc
              </IconsItem>

            </footer>
          </div>
        </HeaderBox>
      </Content>
    </Container>
  );
};