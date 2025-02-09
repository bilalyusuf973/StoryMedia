'use client'
import React, { createContext, useContext, useState } from 'react'

type SearchedUsersContextProps = {
    searchedUsers: any[];
    setSearchedUsers: React.Dispatch<React.SetStateAction<any[]>>;
}

export const SearchedUsersContext = createContext<SearchedUsersContextProps | null>(null);

export const SearchedUsersContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [searchedUsers, setSearchedUsers] = useState<any>([]);

  return (
    <SearchedUsersContext.Provider value={{ searchedUsers, setSearchedUsers }}>
        {children}
    </SearchedUsersContext.Provider>
  )
}

export const useSearchedUsersContext = () => {
    const context = useContext(SearchedUsersContext)
    if(!context){
        throw new Error("useModalContext must be used within a ModalContext.");
    }
    return context;
}

