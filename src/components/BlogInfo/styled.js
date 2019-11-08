import styled from "styled-components"
import { Link } from "gatsby"

export const BlogInfoWrapper = styled.section`
  color: #8899a6;
  display: flex;
  flex-direction: column;
`
export const BlogInfoLink = styled(Link)`
  color: #8899ac;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
      color: #1fa1f2;
  }
`

export const BlogInfoTitle = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`

export const BlogInfoDescription = styled.p`
  font-size: 1rem
  font-weight 300;
  line-height: 1.4;
`