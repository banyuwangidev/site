import * as React from 'react'

const store = {
    crumbPage: "",
    setCrumbPage: () => {}
}

const StoreCtx = React.createContext(store);

const StateProvider = ({ children }) => {
    const [crumbPage, setCrumbPage] = React.useState("");
    return <StoreCtx.Provider value={{ crumbPage, setCrumbPage }}>{children}</StoreCtx.Provider>
}

export { StoreCtx, StateProvider }