import * as React from 'react'
import { StoreCtx } from '../shared/context'

const About = () => {
    const { setCrumbPage } = React.useContext(StoreCtx)
    
    React.useEffect(() => {
        setCrumbPage(["about"])
    },[setCrumbPage])

    return <h1>About PAGE</h1>
}

export default About;