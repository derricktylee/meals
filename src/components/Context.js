import React, { createContext, useContext } from 'react'

const AppContext = createContext()

export function AppProvider({childrn}){

    return <AppContext.Provider value={hello}>{childrn}</AppContext.Provider>
}

export function useGlobalContext(){
    return useContext(AppContext)
}