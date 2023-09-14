import { Dispatch, SetStateAction, createContext } from "react"

export interface GlobalData {
    name: string,
    email: string,
    age: string,
    phone: string
}

export const initGlobalData: GlobalData = {
    name: '',
    email: '',
    age: '',
    phone: ''
}

export interface ContextProps {
    globalDatas: GlobalData,
    setGlobalDatas: Dispatch<SetStateAction<GlobalData>>,
}

export const GlobalContext = createContext<ContextProps>({
    globalDatas: initGlobalData,
    setGlobalDatas: (): GlobalData => initGlobalData,
})