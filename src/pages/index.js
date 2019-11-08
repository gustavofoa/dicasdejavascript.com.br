import React from "react"

import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            timeToRead
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              author
              category
              tags
              image
              summary
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges
  
  return (
    <Layout>
      <SEO title="{ Dicas de Javascript }" />
      {postList.map(({node: {
            timeToRead,
            frontmatter: {title, date, author, category, tags, image, summary },
            fields: { slug }
      }}) => (
        <PostItem 
          slug={slug} 
          title={title}
          summary={summary}
          date={date}
          timeToRead={timeToRead}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
