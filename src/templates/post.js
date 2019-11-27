import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Comments from "../components/Comments"

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
            <Comments url={post.fields.slug} title={post.frontmatter.title}></Comments>
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            timeToRead
            fields {
                slug
            }
            frontmatter {
                title
                summary
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
        }
    }
  
`

export default Post
