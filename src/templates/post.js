import React from "react"

import { graphql } from 'gatsby'
import Layout from "../components/Layout"


const Post = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
            }
        }
    }
  
`

export default Post
