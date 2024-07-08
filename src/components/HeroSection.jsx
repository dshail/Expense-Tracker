import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-sec-cont">
                    <h1>Your Financial Companion</h1>
                    <h2>Easily monitor your spending and achieve your financial objectives.</h2>
                    <h2>Gain financial tranquility with our robust expense tracker.</h2>
                    <a href="#add-expense-form"><button>Get Started</button></a>
                </div>
                <div className="partition"></div>
                <img src="/hero-sec-img4.jpg" alt="Financial Companion" />
            </div>
            <div className="division"></div>
        </>
    );
}

export default HeroSection;
