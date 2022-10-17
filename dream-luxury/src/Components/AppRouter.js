import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import WelcomePage from './WelcomePage';
import BookingPage from './BookingPage';
import { Nav } from './StyledComponents';
import { LogoNav } from './StyledComponents';
import AboutPage from './AboutPage';
import Logo from './imgs/logo.jpg';


const AppRouter = () => {

    return (
        
        <Router>

            <Nav>
            <LogoNav><img src ={Logo} alt='logo'/> </LogoNav>

                <div className='app-router'>
                <Link to='/'>Home</Link>
                <Link to='/about-page'>About</Link>
                <Link to='/booking-page'>Book</Link>

                </div>
            </Nav>

            <Routes>
                <Route exact path='/' element= { <WelcomePage /> } />
                <Route path='/about-page' element= { <AboutPage/> } />
                <Route path='/booking-page' element= { <BookingPage /> } />
            </Routes>

        </Router>
    )

}

export default AppRouter;