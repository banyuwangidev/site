import * as React from "react"

import Article from "./index"
import Avatar from "../Avatar"
import contributors from "../../../contents/contributors/index"

export default {
  title: "Design System/Article",
  parameters: {
    component: Article,
  },
}

const dataPost = {
  title: "Thinking in ReasonML",
  author: "fahmiirsyadk",
  date: "Mar 30,2020",
  slug: "/2020-03-30-thinking-in-reasonml/",
  image: null,
  excerpt: "This is my next blog post. I’m on a roll!",
  contributors: contributors,
}

export const Default = () => <Article post={dataPost} />
