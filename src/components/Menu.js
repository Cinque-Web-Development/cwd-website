import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services">Services</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About Us</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu}>Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
