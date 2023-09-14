"use client";
import { useContext, useState } from "react";
import { GlobalContext, GlobalData, initGlobalData } from "./contextProps";

export const GlobalContextProvider = ({ children }: any) => {
    const [globalDatas, setGlobalDatas] = useState<GlobalData>(initGlobalData)

    return (
        <GlobalContext.Provider value={{
            globalDatas, setGlobalDatas,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)