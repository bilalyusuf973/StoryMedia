'use client'
import React, { createContext, useContext, useState } from 'react'

type ModalContextProps = {
    isModal: boolean;
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isModal, setIsModal }}>
        {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
    const context = useContext(ModalContext)
    if(!context){
        throw new Error("useModalContext must be used within a ModalContext.");
    }
    return context;
}

