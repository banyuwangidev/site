import * as React from "react"

const store = {
  crumbPage: 0,
  setCrumbPage: () => {},
}

const StoreCtx = React.createContext(store)

const StateProvider = ({ children }) => {
  const [crumbPage, setCrumbPage] = React.useState(0)
  return (
    <StoreCtx.Provider value={{ crumbPage, setCrumbPage }}>
      {children}
    </StoreCtx.Provider>
  )
}

export { StoreCtx, StateProvider }
