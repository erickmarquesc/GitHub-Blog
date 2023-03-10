import { IoPeople, IoBusiness, IoArrowRedoCircle, IoLocationSharp } from "react-icons/io5";
import { useRepository } from "../../context/useRepository";
import { Container, Content } from "../Containers/styles";
import { ButtonModal } from "../Modal/ButtonModal";
import { HeaderBox, IconsItem } from "./styles";
import { GoMarkGithub } from "react-icons/go";

export function Header() {
  const { user} = useRepository();

  return (
    <Container variant="inHeader">
      <Content>
        <>
          <HeaderBox>
            <img src={user.avatar_url} />
            <div className="InfoConteiner">
              <section>
                <h1>{user.name}</h1>
                <a href={user.html_url} target={"_blank"}>
                  <section>
                    <strong>github</strong>
                    <IoArrowRedoCircle />
                  </section>
                </a>
              </section>
              <text>{user.bio}</text>
              <footer>
                <IconsItem>
                  <GoMarkGithub />
                  {user.login}
                </IconsItem>
                <IconsItem>
                  {user.company ? <IoBusiness />
                    : <IoLocationSharp />}
                  {user.company ? user.company
                    : user.location}
                </IconsItem>
                <IconsItem>
                  <IoPeople />
                  {user.followers} seguidores
                </IconsItem>
                <IconsItem>
                  <ButtonModal />
                </IconsItem>
              </footer>
            </div>
          </HeaderBox>
        </>
      </Content>
    </Container>
  );
};