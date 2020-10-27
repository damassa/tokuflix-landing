import React from 'react';
import SerieCard from '../components/SerieCard';

import '../styles/pages/home.css';

function Home() {
    return(
        <div id="home">
            <div className="home-wrapper">
                <main>
                    <SerieCard />
                </main>
            </div>
        </div>
    );
}

export default Home;