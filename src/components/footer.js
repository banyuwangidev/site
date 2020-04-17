import React from "react"
import Link from "../components/Link"

const Footer = () => (
  <footer>
    &copy; {new Date().getFullYear()}, Built with
    {` `}
    <Link to="www.banyuwangidev.org" external>
      Banyuwangi Dev
    </Link>
  </footer>
)

export default Footer
