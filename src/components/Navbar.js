import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <Link to="/" >HOME</Link>
            <Link to="/info">Information</Link>
        </div>
    )
}

export default NavBar;