import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [hamburgerClick, setHamburgerClick] = useState(false);

    const handleHamburgerNav = () => {
        setHamburgerClick(!hamburgerClick);
    };

    const closeHamburgerNav = () => {
        setHamburgerClick(false);
    };

    return (
        <>
            <div id="Home"></div>
            <div className="navbar">
                <nav>
                    <div className='logo'>
                        <img src="/logo2.jpg" alt="logo" />
                        <Link to="/">
                            <h1>Expense Tracker</h1>
                        </Link>
                    </div>
                    <ul className={hamburgerClick ? 'nav-links open' : 'nav-links'}>
                        <li onClick={closeHamburgerNav}><Link to="#Home">Home</Link></li>
                        <li onClick={closeHamburgerNav}><Link to="#add-expense-form">Add Expense</Link></li>
                        <li onClick={closeHamburgerNav}><Link to="#expense-list-division">Expense List</Link></li>
                    </ul>
                    <div className='svg-nav-div' onClick={handleHamburgerNav} aria-label="Toggle Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#ffffff" fill="none">
                            <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </nav>
                {hamburgerClick && (
                    <div className='ham-nav-cont'>
                        <div className="opac-ham-nav" onClick={closeHamburgerNav}></div>
                        <div className='hamburger-nav'>
                            <ul>
                                <li onClick={closeHamburgerNav}><Link to="#Home">Home</Link></li>
                                <li onClick={closeHamburgerNav}><Link to="#add-expense-form">Add Expense</Link></li>
                                <li onClick={closeHamburgerNav}><Link to="#expense-list-division">Expense List</Link></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
