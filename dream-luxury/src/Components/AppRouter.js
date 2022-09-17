import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';


const AppRouter = () => {

    return (
        <Router>
            <div className='app-router'>
             <Link to='/'>Home</Link>

            </div>

            <Routes>
                <Route exact path='/' element= { <WelcomePage /> } />
            </Routes>

        </Router>
    )

}

export default AppRouter;