import React, { useState } from 'react';
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
                <div className='navbar'>
                    <button type='navButton' onClick={() => setpageState(0)}>About Me</button>
                    <button type='navButton' onClick={() => setpageState(1)}>Portfolio</button>
                    <button type='navButton' onClick={() => setpageState(2)}>Contact Me</button>
                    <button type='navButton' onClick={() => setpageState(3)}>Resume</button>
                </div>
            </header>

            {/* Conditional to swap between page types */}
            <Navigation page={pageState} />

            <div className='icons'>
                
            </div>
        </div>
    );
}

export default MainPage;