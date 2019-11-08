import React from 'react'
import * as S from "./styled"
import BlogInfo from "../BlogInfo"
import MenuLinks from '../MenuLinks'

const Sidebar = () => (
    <S.SidebarWrapper>
        <BlogInfo />
        <MenuLinks />
    </S.SidebarWrapper>
)

export default Sidebar