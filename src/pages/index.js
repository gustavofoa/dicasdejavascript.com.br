import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="{ Dicas de Javascript }" />
    <h1>Dicas de Javascript</h1>
    <PostItem 
      slug="#" 
      title="Como criar uma classe em Javascript"
      summary="A partir da especificação ES2015, nós podemos criar uma classe em javascript!"
      date="06 de setembro de 2019"
    />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </Layout>
)

export default IndexPage
