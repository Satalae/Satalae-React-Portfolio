import React, { useState } from 'react';
import { DiGithubBadge } from "react-icons/di"
import Navigation from './Navigation';

function MainPage(){
    // Location of page, swaps between each depending on pageState num
    // Starts on About Me
    const [pageState, setpageState] = useState(0);

    // Returns entire mainpage state
    return (
        <div>
            <header>
                <h1> Harrison Counts </h1>
                <div className='frank-emblem'>
                    <img src='./images/frank.jpg' alt='emblemFrank' id='emblemFrank'/>
                </div>
                <div className='navbar'>
                    <button type='navButton' id="nav-button" onClick={() => setpageState(0)}>About Me</button>
                    <button type='navButton' id="nav-button" onClick={() => setpageState(1)}>Portfolio</button>
                    <button type='navButton' id="nav-button" onClick={() => setpageState(2)}>Contact Me</button>
                    <button type='navButton' id="nav-button" onClick={() => setpageState(3)}>Resume</button>
                </div>
            </header>

            <div className='content'>
                {/* Conditional to swap between page types */}
                <Navigation page={pageState} />
            </div>

            <div className='footer'>
                <DiGithubBadge 
                className='github-icon'
                onClick={() => window.location.href = "https://github.com/Satalae"}
                />
            </div>
        </div>
    );
}

export default MainPage;