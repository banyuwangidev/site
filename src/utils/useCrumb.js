import * as React from 'react'
import { StoreCtx } from '../shared/context'

const useCrumb = () => {
    const { crumbPage } = React.useContext(StoreCtx)
    return crumbPage
}

export default useCrumb
