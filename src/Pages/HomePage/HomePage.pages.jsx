import React from 'react';

import Header from '../../Components/Header/Header.component';
import Showcase from '../../Components/Showcase/Showcase.component';

const HomePage = () => {
    return (
        <div>
            <div className="top">
                <div className="lg:container mx-auto pt-5">
                    <Header />
                    <Showcase />
                </div>
            </div>
        </div>
    )
}

export default HomePage;