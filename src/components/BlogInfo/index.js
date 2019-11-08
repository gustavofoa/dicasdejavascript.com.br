import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import * as S from "./styled"

const BlogInfo = () => {
    const { 
        site: {
            siteMetadata: {title, description}
        }
    } = useStaticQuery(graphql`
        query BlogMetadata {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <S.BlogInfoWrapper>
            <S.BlogInfoLink to="/">
                <S.BlogInfoTitle>{title}</S.BlogInfoTitle>
            </S.BlogInfoLink>
            <S.BlogInfoDescription>
                {description}
            </S.BlogInfoDescription>
        </S.BlogInfoWrapper>
    )
}

export default BlogInfo