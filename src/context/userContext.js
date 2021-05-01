import { createContext, useContext } from "react";
// import  {data } from "../database";

const UserContext = createContext();
const usersDb = [];

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ usersDb }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
