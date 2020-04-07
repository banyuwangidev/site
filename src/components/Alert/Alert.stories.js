import * as React from "react"

import Alert from "./index"

export default {
  title: "Design System/Alert",
  parameters: {
    component: Alert,
  },
}

export const All = () => (
  <>
    <Alert type="primary">primary</Alert>
    <Alert type="success">success</Alert>
    <Alert type="warning">warning</Alert>
    <Alert type="error">error</Alert>
  </>
)
export const Success = () => <Alert type="success">success</Alert>
export const Warning = () => <Alert type="warning">warning</Alert>
export const Error = () => <Alert type="error">error</Alert>
