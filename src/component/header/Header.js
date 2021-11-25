import React from 'react';
import {Link} from 'react-router-dom';
import '../css/header/Header.css';
import Avatar from '@material-ui/core/avatar';
function Header() {
    return (
        <nav className="navbar">

            {/* logo */}
            <div className="navbarLogo">
                <Link className="navLink" to="/"><h1>GETMYTOPIC</h1></Link>
            </div>


            {/* links  */}
            <div className="links">
                <Link className="navLink" to="/">Home</Link>
                <div class="dropdownStream">
                    <span className="navLink">Stream</span>
                    <ul className="dropdownStreamContent">
                        <li><Link to="/stream/bcom">BCOM</Link></li>
                        {/* <li><Link to="/stream/bse">BSE</Link></li>
                        <li><Link to="/stream/ba">BA</Link></li> */}
                    </ul>
                </div>
                <Avatar/>
            </div>

        </nav>
    )
}

export default Header
