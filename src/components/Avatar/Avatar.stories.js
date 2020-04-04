import * as React from "react"

import Avatar from "./index"

export default {
  title: "Design System/Avatar",
  parameters: {
    component: Avatar,
  },
}

const sizes = {
  large: 72,
  medium: 56,
  small: 42,
  tiny: 32,
}

const url = (size) =>
  `https://avatars1.githubusercontent.com/fahmiirsyadk?size=${size}`

export const All = () => (
  <div>
    <h1>Avatar</h1>
    <Avatar size="tiny" src={url(sizes.tiny)} label="Fahmi Irsyad Khairi" />
    <Avatar size="small" src={url(sizes.small)} label="Fahmi Irsyad Khairi" />
    <Avatar size="medium" src={url(sizes.medium)} label="Fahmi Irsyad Khairi" />
    <Avatar size="large" src={url(sizes.large)} label="Fahmi Irsyad Khairi" />
  </div>
)

export const Tiny = () => (
  <Avatar size="tiny" src={url(sizes.tiny)} label="Fahmi Irsyad Khairi" />
)
export const Small = () => (
  <Avatar size="small" src={url(sizes.small)} label="Fahmi Irsyad Khairi" />
)
export const Medium = () => (
  <Avatar size="medium" src={url(sizes.medium)} label="Fahmi Irsyad Khairi" />
)
export const Large = () => (
  <Avatar size="large" src={url(sizes.large)} label="Fahmi Irsyad Khairi" />
)
