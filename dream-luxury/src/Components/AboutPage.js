import React from 'react';
import { Image } from './StyledComponents';

import NOEL1 from './imgs/NOEL1.jpg';


const AboutPage = () => {


    return (
        <div className='about-page'>
            <p>My name is Noel Bates and I am the owner of Dream Luxury Rentals. I was born and raised in West Memphis, Arkansas and made my way to Texas 7 years ago. I always had a huge passion for foreign cars since I was a kid, which inspired me to start a luxury rental car business to allow others to experience driving luxury vehicles at a reasonable rate. If you are interested in renting out a vehicle, click on the "Book" tab to schedule your rental!</p>
             <Image>
                <img src ={NOEL1} alt='noel' />
            </Image>
        </div>
    )
}


export default AboutPage;