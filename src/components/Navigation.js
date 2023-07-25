import React, { useState } from 'react';

// About Me Return
function AboutMe() {
    return(
        <div>
            <h2>About Me</h2>
            
            <img src='./images/frank.jpg' alt='missingFrank' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet ante nec dui viverra, nec molestie diam placerat. Cras mollis elit ac massa interdum venenatis. Etiam a ipsum at augue lacinia fermentum. Suspendisse commodo, felis quis lacinia aliquam, est neque malesuada nunc, quis rutrum lorem nibh eu elit. Suspendisse mollis bibendum tellus quis fringilla. Fusce faucibus velit quis ante efficitur, nec mattis enim tempus. In lacus tortor, commodo a porttitor vel, egestas at sapien. Etiam convallis metus non imperdiet rhoncus.

            Quisque id velit leo. Integer placerat felis eget sem volutpat ullamcorper. Mauris vitae purus vel quam tristique hendrerit. Vivamus ut ex nibh. Aliquam finibus enim a felis interdum lacinia. Donec et augue placerat, mattis leo et, tristique diam. Sed feugiat turpis elit, vitae lacinia felis luctus id. Morbi mi tortor, sodales at convallis et, facilisis rhoncus neque. Donec a purus efficitur nisi venenatis ultrices eget id lorem. Phasellus ut libero dui. Sed sit amet mattis ligula. Etiam maximus massa eget augue rhoncus, ac rutrum ante volutpat. Nunc convallis, ipsum a faucibus luctus, sem arcu ultrices purus, at dapibus mi odio iaculis libero.

            In non aliquet neque. Maecenas porttitor cursus fringilla. Sed congue, eros sit amet fermentum laoreet, dolor felis lobortis turpis, et convallis risus arcu nec nunc. Aliquam velit mauris, ultrices ac dictum ultricies, aliquet et nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae ex est. Fusce imperdiet augue eget diam maximus, eget dignissim urna vestibulum. Etiam fermentum tempus ligula eget interdum. In dignissim lectus arcu, vitae vestibulum metus porttitor consequat. Vivamus efficitur gravida elit et cursus. Nulla gravida accumsan erat, eu consequat nulla suscipit in. Integer a elementum odio. Vestibulum luctus orci sed nunc posuere, eu viverra orci sodales. Suspendisse non magna scelerisque, semper urna lacinia, vestibulum dui.

            Sed lacinia, turpis nec hendrerit lacinia, nunc mi semper eros, id tempus lectus lacus et nisi. Duis imperdiet lacus non eros blandit luctus. Etiam augue ipsum, malesuada id ipsum nec, vulputate varius leo. Praesent ornare tempor leo ac scelerisque. Morbi sit amet bibendum mi. Etiam egestas tincidunt tempor. Donec efficitur, eros et feugiat blandit, libero metus ullamcorper dui, ut elementum urna ex sit amet eros. Duis cursus, velit iaculis maximus accumsan, magna odio imperdiet risus, in suscipit justo sem et purus. Nam tempus, metus ut consequat dignissim, erat sapien fringilla sem, ac vestibulum sem odio et augue. In sit amet magna rutrum, rutrum turpis vel, accumsan lorem. Quisque pharetra dolor lacus, eget ornare lectus tristique quis. Nam lacinia in mauris ac sagittis. In dictum convallis commodo. Pellentesque a velit sit amet neque fermentum sagittis.

            Vivamus interdum, nisl ac rhoncus eleifend, justo ligula ullamcorper quam, eu tristique sapien ipsum nec turpis. In a velit vel nisi convallis posuere sed id quam. Vivamus tincidunt massa ante, ac dictum libero scelerisque nec. Duis nec volutpat leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis venenatis euismod mauris a fermentum. Etiam lobortis elit consectetur malesuada semper. Donec mattis efficitur augue eget vehicula. Nam at euismod tellus, ac finibus magna. Quisque mi nulla, mollis nec ex vel, egestas maximus velit. Nullam interdum pulvinar condimentum. Nulla blandit auctor sem a ultricies. Ut quis urna mattis, lobortis eros vel, ullamcorper ex. Sed semper commodo mi vel congue.</p>
        </div>
    );
}

// Portfolio Return
function Portfolio() {
    return(
        <div>
            <h2>Portfolio</h2>
            <div className='img-container'>
                <img src='./images/frank.jpg' />
                <img src='./images/frank.jpg' />
                <img src='./images/frank.jpg' />
                <img src='./images/frank.jpg' />
            </div>
        </div>
    );
}

//Contact Return
const handleSubmit = (e) => {
    e.preventDefault();
}

function Contact() {
    return(
        <div>
            <h2>Contact Me:</h2>
            <form className='contact-form' onSubmit={handleSubmit}>
                <h3>Name</h3>
                <input
                type='text'
                placeholder='name'
                name='name'
                className='smallText'
                ></input>

                <h3>Email Address:</h3>
                <input
                type='text'
                placeholder='email'
                name='email'
                className='smallText'
                ></input>

                <h3>Message:</h3>
                <input
                type='text'
                placeholder='Type your message here. . .'
                name='message'
                className='bigText'
                ></input>

                <button className='contact-submit-button'>Submit</button>
            </form>
        </div>
    );
}

//Resume Return
function Resume() {
    return(
        <div>
            <h2>Resume</h2>
            <h3>Front-End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-End Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
            </ul>
        </div>
    );
}

// Final Return, chooses between the 4 by number sent from pageState var in 
// Mainpage.js
function Navigation(props) {
    const [group, setGroup] = useState([AboutMe(), Portfolio(), Contact(), Resume()]);
    
    return( group[props.page] );
}

export default Navigation;