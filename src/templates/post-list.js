import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

const PostList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext

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

      <Pagination 
        isFirst={currentPage === 1} 
        isLast={currentPage === numPages} 
        currentPage={currentPage} 
        numPages={numPages} 
        prevPage={currentPage === 2 ? '/' : `/page/${currentPage - 1}`} 
        nextPage={`/page/${currentPage + 1}`} />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: {order: DESC, fields: frontmatter___date}
        limit: $limit
        skip: $skip
      ) {
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
  
`

export default PostList
