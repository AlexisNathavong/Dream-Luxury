import React from 'react';
import { IMG } from './StyledComponents';


const AboutPage = () => {


    return (
        <div>
             <IMG>
                <img className="img-container" src={require('https://i.imgur.com/euoqnGw.png')} alt="img of Alexis." />
            </IMG>
        </div>
    )
}


export default AboutPage;