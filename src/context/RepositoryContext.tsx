import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export interface IRepositories {
  id: number;
  name: string;
  description: string;
  created_at: string;
  language: string;
  topics: [];
  html_url: string
}

export interface IUser {
  avatar_url: string;
  bio: string;
  location: string;
  login: string;
  name: string;
  public_repos: number;
  company: string;
  followers: number;
  html_url: string
}

export interface IRepositoryContextType {
  repositories: IRepositories[];
  handleSearchRepository: (repositoryName: string) => void;
  user: IUser;
  handleConfigUserName: (userName: string) => void;
};

export interface IRepositoryProviderProps {
  children: ReactNode;
};

export const RepositoryContext = createContext({} as IRepositoryContextType);

export function RepositoryProvider({ children }: IRepositoryProviderProps) {

  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState({} as IUser)
  const [userReferencie, setUserReferencie] = useState('erickmarquesc')

  useEffect(() => {
    fetch(`https://api.github.com/users/${userReferencie}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [userReferencie]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userReferencie}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [userReferencie]);

  function handleConfigUserName(userName: string) {
    setUserReferencie(userName);
    
  }

  const handleSearchRepository = (repositoryName: string) => {

    fetch(`https://api.github.com/search/repositories?q="${repositoryName}"+in:name+user:erickmarquesc`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items)
      });
  };

  return (
    <RepositoryContext.Provider value={{
      repositories,
      handleSearchRepository,
      user,
      handleConfigUserName
    }}>
      {children}
    </RepositoryContext.Provider>
  );
};