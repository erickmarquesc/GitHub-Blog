import { IRepositoryContextProps, IRepositoryProviderProps, IUser } from "./interfaces";
import { useEffect, useState, createContext } from "react";

export const RepositoryContext = createContext<IRepositoryContextProps>({} as IRepositoryContextProps);

export function RepositoryProvider({ children }: IRepositoryProviderProps) {

  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState({} as IUser);

  const [userReferencie, setUserReferencie] = useState(localStorage.getItem("userName") || 'erickmarquesc');

  useEffect(() => {
    fetch(`https://api.github.com/users/${userReferencie}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [userReferencie]);

  useEffect(() => {
    localStorage.setItem("userName", userReferencie);

    fetch(`https://api.github.com/users/${userReferencie}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [userReferencie]);

  function handleConfigUserName(userName: string) {
    setUserReferencie(userName);
  };

  const handleSearchRepository = (repositoryName: string) => {

    fetch(`https://api.github.com/search/repositories?q="${repositoryName}"+in:name+user:${userReferencie}`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items)
      });
  };

  return (
    <RepositoryContext.Provider value={{
      user,
      repositories,
      handleConfigUserName,
      handleSearchRepository,
    }}>
      {children}
    </RepositoryContext.Provider>
  );
};