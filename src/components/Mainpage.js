import React, { useState } from 'react';
import Projects from './Projects';
import About from './Aboutme';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';

function pageType(props){
    let returnedPage;

    switch(props.pageState){
        case 'AboutMe':
            returnedPage = About;
            break;
        case 'Portfolio':
            returnedPage = Portfolio;
            break;
        case 'Contact':
            returnedPage = ContactMe;
            break;
        case 'Resume':
            returnedPage = Projects;
            break;
    }

    return returnedPage;
}

function MainPage(){
    // Location of page, swaps between each depending on return state
    const [pageLocation, setPageLocation] = useState(['AboutMe', 'Portfolio', 'Contact', 'Resume']);
    // Starts on About Me
    let pageState = 0;

    // Returns entire mainpage state
    return (
        <div>
            <header>
                <h1> Harrison Counts </h1>
                <navbar>
                    <button type='navButton' onClick={() => pageState = 0}>About Me</button>
                    <button type='navButton' onClick={() => pageState = 1}>Portfolio</button>
                    <button type='navButton' onClick={() => pageState = 2}>Contact Me</button>
                    <button type='navButton' onClick={() => pageState = 3}>Resume</button>
                </navbar>
            </header>

            {/* Conditional to swap between page types */}
            {pageType(pageState)}
        </div>
    );
}

export default MainPage;