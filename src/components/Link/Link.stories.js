import * as React from 'react'
import Link from './index'

export default {
    component: Link,
    title: "Design System|Link",
}

export const Default = () => <Link to="/"><p>BRO</p></Link>
export const NoUnderline = () => <Link to="/" decoration="none"><p>No Underline</p></Link>
export const External = () => <Link to="/" external><p>External</p></Link>
export const ExternalNoUnderline = () => <Link to="/" decoration="none" external><p>External with no underline</p></Link>