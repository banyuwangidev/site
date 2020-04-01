import * as React from 'react'
import { StateProvider } from './src/shared/context'

export const wrapRootElement = ({ element }) => (
    <StateProvider>{element}</StateProvider>
)