export interface IModalContextProps {
  handleClouseModal: () => void;
  handleOpenModal: () => void;
  stateModal: string;
};

export interface IModalProviderProps {
  children: ReactNode;
};

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

export interface IRepositoryContextProps {
  repositories: IRepositories[];
  handleSearchRepository: (repositoryName: string) => void;
  user: IUser;
  handleConfigUserName: (userName: string) => void;
};

export interface IRepositoryProviderProps {
  children: ReactNode;
};