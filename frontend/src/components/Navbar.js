import React from 'react';

import search from '../images/search.svg';
import user from '../images/user.svg';
import arrow from '../images/arrow-down.svg';

import '../styles/components/navbar.css';

export default function Navbar() {
    return(
        <nav>
            <div className="nav-container">
                <div className="nav-content">
                    <div className="menu-left">
                        <div className="nav-logo">
                            LOGO
                        </div>
                        <div className="nav-items-left">
                            <ul>
                                <li>Séries</li>
                                <li>Filtrar por</li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-right">
                        <div className="nav-searchbox">
                            <img src={search} alt="search" />
                        </div>
                        <div className="nav-user">
                            <img src={user} alt="user"/>
                            <img src={arrow} alt="user"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}