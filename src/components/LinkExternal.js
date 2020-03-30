
import React from "react"

const LinkExternal = ({ link, text = "" }) => (
  <a href={`http://${link}`} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
)

export default LinkExternal