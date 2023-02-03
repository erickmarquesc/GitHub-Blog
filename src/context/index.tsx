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
};

export interface IRepositoryProviderProps {
  children: ReactNode;
}

export const RepositoryContext = createContext({} as IRepositoryContextType);

export function RepositoryProvider({ children }: IRepositoryProviderProps) {

  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState({} as IUser)

  useEffect(() => {
    fetch('https://api.github.com/users/erickmarquesc/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/erickmarquesc')
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, []);


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
      user
    }}>
      {children}
    </RepositoryContext.Provider>
  );
};