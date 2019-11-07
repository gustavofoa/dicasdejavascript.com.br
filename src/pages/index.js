import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="{ Dicas de Javascript }" />
    <h1>Dicas de Javascript</h1>
    <ul>
      <li>
        <Link to="politica-de-privacidade">Política de privacidade</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
