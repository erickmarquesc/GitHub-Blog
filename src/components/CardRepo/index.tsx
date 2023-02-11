import { useRepository } from "../../context/useRepository";
import { Container, Content } from "../Containers/styles";
import { formatDistanceToNow } from 'date-fns';
import { CardRepoContent } from "./styles";
import ptBR from 'date-fns/locale/pt-BR';

export function CardRepo() {
  const { repositories} = useRepository();

  function formatCreatedAt(createdAt: string) {
    const createdAtFormat = new Date(createdAt);

    const createdAtRelativeToNow = formatDistanceToNow(createdAtFormat, {
      locale: ptBR,
      addSuffix: true,
    });

    return (createdAtRelativeToNow);
  };

  return (
    <Container>
      <Content>
        {repositories.map((repo) => {
          return (
            <CardRepoContent key={repo.id}>
              <a href={repo.html_url} target={"_blank"}>
                <header>
                  <h1>{repo.name}</h1>
                  <strong>{formatCreatedAt(repo.created_at)}</strong>
                </header>
                <main>
                  <p>
                    {repo.description ? repo.description
                      : 'Não há descrição para esse repositório!'}
                  </p>
                  <label>Linguagem: {repo.language ? repo.language : "Nenhuma Linguaguem referenciada"}</label>
                </main>
                <footer>
                  {repo.topics.map((topic, index) => {
                    return (
                      <>
                        {
                          index <= 3 ?
                            (
                              <ul>
                                <li>#{topic}</li>
                              </ul>

                            ) : <></>
                        }
                      </>
                    )
                  })}
                </footer>
              </a>
            </CardRepoContent>
          )
        })}
      </Content>
    </Container>
  );
};