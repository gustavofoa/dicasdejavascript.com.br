import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Página não encontrada" />
    <h1>404</h1>
    <p>Ops! Não encontramos esta página.</p>
  </Layout>
)

export default NotFoundPage
