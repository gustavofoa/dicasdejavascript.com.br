import styled from "styled-components"

import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: #8899a6;
  display: flex;
  text-decoration: none;

  &:hover {
    color: #1fa1f2;
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid #38444d;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`

export const PostItemImage = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDate = styled.time`
  padding-top: 0.5rem;
  font-size: 0.9rem;
`

export const PostItemSummary = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`