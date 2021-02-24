import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import logo from "../assets/images/website-icon.png"

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/"><img className="logo" src={logo} alt="Cinque Logo"/></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu}>Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
