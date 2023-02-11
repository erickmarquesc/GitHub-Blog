import { useContext } from "react";
import { RepositoryContext } from "./RepositoryContext";

export function useRepository() {
  return useContext(RepositoryContext);
};