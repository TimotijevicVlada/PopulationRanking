import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Link to={`/`} style={{ textDecoration: 'none' }}>
            <div className="header">
                <img src={`./images/ranking 1.png`} alt="ranking" />
                <h1>Population Ranking</h1>
            </div>
        </Link>
        
    )
}

export default Header;
