import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';
import BottomButtons from '../components/BottomButtons';

/**
 * @returns <div> de la page d'accueil
 */

const Home = () => {
    return (
        <div>

            <div className="home">

                <Navigation></Navigation>
                <SocialNetwork></SocialNetwork>

                <div className="home-main">
                    <div className="main-content">
                        <h1>PORTFOLIO</h1>
                        <h2><DynamicText/></h2>
                    </div>
                </div>
                <BottomButtons right={"/vitrine-app/project-1"} pageName={"Accueil"}></BottomButtons>

            </div>
            
        </div>
    );
};

export default Home;