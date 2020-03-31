const util = require("util")
const format = require("date-format")

const formatDate = now => {
  return format.asString("yyyy-MM-dd", now)
}

const contributorsTemplate = collection => `
/* silahkan menambahkan data kamu sesuai dengan format berikut
   name: <nama_kamu>
   github: <usename_github_kamu>
   site: <situs_pribadi_kamu>
   bio: <biodata_singkat_tentang_kamu>
*/
const contributorList = ${util.inspect(collection)}
module.exports = contributorList
`

const blueprintPost = (title, username, date) => {
  const capitalize =
    String(title)
      .charAt(0)
      .toUpperCase() + String(title).slice(1)

  return `---
title: "${capitalize}"
author: "${username}"
image: ""
date: ${date}
tags:
  - "new year"
  - "programming"
---
This is my next blog post. I’m on a roll!
`
}

module.exports = {
  blueprintPost,
  formatDate,
  contributorsTemplate,
}