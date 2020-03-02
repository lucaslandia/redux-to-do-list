import PropTypes from 'prop-types'
import React from 'react'
import { Button } from 'react-bootstrap'

const Link = ({ active, children, onClick, variant }) =>
    <Button
        onClick={onClick}
        disabled={active}
        style={{ marginLeft: '10px' }}
        variant={variant}
    >
        {children}
    </Button>

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link