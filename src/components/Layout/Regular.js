import * as React from "react"

import Footer from "../footer"

const Full = ({ children }) => (
  <div
    style={{
      display: `flex`,
      flexDirection: `column`,
      minHeight: `78vh`,
      maxWidth: 800,
      margin: `140px auto 0`,
    }}
  >
    <main
      style={{
        flexGrow: 1,
      }}
    >
      {children}
    </main>
    <Footer />
  </div>
)

export default Full
