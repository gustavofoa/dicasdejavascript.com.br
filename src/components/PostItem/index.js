import React from 'react'
import PropTypes from 'prop-types'

import * as S from "./styled"

const PostItem = ({slug, title, summary, date}) => (
    <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
        <S.PostItemImage />
        <S.PostItemInfo>
            <S.PostItemTitle>{title}</S.PostItemTitle>
            <S.PostItemSummary>{summary}</S.PostItemSummary>
            <S.PostItemDate>Em {date}</S.PostItemDate>
        </S.PostItemInfo>
    </S.PostItemWrapper>
    </S.PostItemLink>
)

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default PostItem