import * as React from 'react'
import { StoreCtx } from '../shared/context'

const Event = () => {
    const { setCrumbPage } = React.useContext(StoreCtx)
    
    React.useEffect(() => {
        setCrumbPage(["event"])
    },[])

    return <h1>EVENT PAGE</h1>
}

export default Event;