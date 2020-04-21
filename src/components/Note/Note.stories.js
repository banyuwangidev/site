import * as React from "react"

import Note from "./index"

export default {
  title: "Design System/Note",
  parameters: {
    component: Note,
  },
}

export const All = () => (
  <>
    <Note>Something important</Note>
    <Note type="secondary">Something important</Note>
    <Note type="primary">Something important</Note>
    <Note type="success">Something important</Note>
    <Note type="warning">Something important</Note>
    <Note type="error">Something important</Note>
    <Note label="custom">Something important</Note>
    <Note noLabel>Something important</Note>
    <Note small>Something important</Note>
  </>
)

export const Default = () => <Note>Something important</Note>
export const Secondary = () => <Note type="secondary">Something important</Note>
export const Success = () => <Note type="success">Something important</Note>
export const Warning = () => <Note type="warning">Something important</Note>
export const Error = () => <Note type="error">Something important</Note>
export const Small = () => <Note small>Something important</Note>
export const CustomLabel = () => <Note label="custom">Something important</Note>
export const NoLabel = () => <Note noLabel>Something important</Note>
