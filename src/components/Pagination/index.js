import React from 'react'

import { Link } from 'gatsby'
import propTypes from 'prop-types'

import * as S from "./styled"

const Pagination = ({ 
        isFirst, 
        isLast, 
        currentPage, 
        numPages, 
        prevPage, 
        nextPage 
    }) => (
        <S.PaginationWrapper>
            {!isFirst && <Link to={prevPage}>&#8592; página anterior</Link> }
            <p>
                {currentPage} de {numPages}
            </p>
            {!isLast && <Link to={nextPage}>próxima página &#8594;</Link> }
            
        </S.PaginationWrapper>
    )

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired, 
    currentPage: propTypes.number.isRequired, 
    numPages: propTypes.number.isRequired, 
    prevPage: propTypes.string, 
    nextPage: propTypes.string
}

export default Pagination