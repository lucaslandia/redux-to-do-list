import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../constants/constants'
import './Footer.sass'

const Footer = () =>
    <div>
        <span className='showLabel'>Show: </span>
        <FilterLink
            filter={VisibilityFilters.SHOW_ALL}
            variant='primary'
        >
            All
        </FilterLink>
        <FilterLink
            filter={VisibilityFilters.SHOW_ACTIVE}
            variant='danger'
        >
            Active
        </FilterLink>
        <FilterLink
            filter={VisibilityFilters.SHOW_COMPLETED}
            variant='success'
        >
            Completed
        </FilterLink>
    </div>

export default Footer