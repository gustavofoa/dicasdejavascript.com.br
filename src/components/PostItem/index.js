import React from 'react'
import PropTypes from 'prop-types'

import * as S from "./styled"

const PostItem = ({slug, title, summary, date, timeToRead}) => (
    <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
        <S.PostItemImage />
        <S.PostItemInfo>
            <S.PostItemTitle>{title}</S.PostItemTitle>
            <S.PostItemSummary>{summary}</S.PostItemSummary>
            <S.PostItemDate>Em {date} - {timeToRead} min de leitura</S.PostItemDate>
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