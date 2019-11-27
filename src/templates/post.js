import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Post/styled"

const Post = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <S.PostHeader>
                <S.PostDate>{post.frontmatter.date} - {post.timeToRead} min de leitura</S.PostDate>
                <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                <S.PostSummary>{post.frontmatter.summary}</S.PostSummary>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </S.MainContent>
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            timeToRead
            frontmatter {
                title
                summary
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
        }
    }
  
`

export default Post
