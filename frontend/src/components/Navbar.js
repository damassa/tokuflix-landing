import React from 'react';

import '../styles/components/navbar/navbar.css';

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
                                <li>Meus favoritos</li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-right">
                        <div className="nav-searchbox">
                            Pesquisa
                        </div>
                        <div className="nav-user">
                            User
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}