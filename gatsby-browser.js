import * as React from "react"
import { StateProvider } from "./src/shared/context"
require("typeface-inter")

export const wrapRootElement = ({ element }) => (
  <StateProvider>{element}</StateProvider>
)
