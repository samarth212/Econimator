import React from 'react';
import redPinkGradient from './assets/red-pink-gradient.png';
import './home.css'


function Home(){
    
    return(
        <>
        <p className="home-title">Econimator</p>
        <p className="home-subtitle">Design your own market graphs.</p>
        <div className="home-buttons-container">

            <div className="home-button">
                <img className="home-img" src={redPinkGradient} alt="" />
                <p>Basic Demand and Supply</p>
            </div>
            <div className="home-button">
                <img className="home-img" src={redPinkGradient} alt="" />
                <p>Market Failure</p>
            </div>
            <div className="home-button">
                <img className="home-img" src={redPinkGradient} alt="" />
                <p>Custom</p>
            </div>

        </div>
        </>
    )
}

export default Home