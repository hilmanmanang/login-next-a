import { Dispatch, SetStateAction, createContext } from "react"

export interface GlobalData {
    name: string,
    email: string,
    age: string,
    phone: string,
    language: string
}

export const initGlobalData: GlobalData = {
    name: '',
    email: '',
    age: '',
    phone: '',
    language: 'en'
}

export interface ContextProps {
    globalDatas: GlobalData,
    setGlobalDatas: Dispatch<SetStateAction<GlobalData>>,
}

export const GlobalContext = createContext<ContextProps>({
    globalDatas: initGlobalData,
    setGlobalDatas: (): GlobalData => initGlobalData,
})