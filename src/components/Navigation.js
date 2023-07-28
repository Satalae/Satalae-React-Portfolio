// Importing react and useState
import React, { useState } from 'react';

// About Me Return
function AboutMe() {
    return(
        <div>
            <h2>About Me</h2>
            
            <img src='./images/frank.jpg' alt='missingFrank' />

            <h3>General</h3>
            <p>My name is Harrison Counts, I'm attempting to get into Web Dev for the time being
                and work currently as an assistant manager at a nearby retail store.
            </p>

            <h3>Interests</h3>
            <p>
                I play multiple MMOs like Final Fantasy XIV and World of Warcraft, and also
                play tabletop games like Dungeons and Dragons, while attempting to get a group
                together for Pathfinder!  
            </p>
            <p>
                Outside of what I like to do, I've been trying to be a bit healthier and stay in
                a bit better shape, and as such I frequently try to take long walks when I can 
                and cut out the old child habits of sweets.
            </p>
        </div>
    );
}

// Portfolio Return
function Portfolio() {
    return(
        <div>
            <h2>Portfolio</h2>
            
                <div className='image-text'>
                    <img src='./images/Chal1.png' alt='project1'/>
                    <div className='challenge-text'>Challenge 1</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal2.png' alt='project2'/>
                    <div className='challenge-text'>Challenge 2</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal3.png' alt='project3'/>
                    <div className='challenge-text'>Challenge 3</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal4.png' alt='project4'/>
                    <div className='challenge-text'>Challenge 4</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal5.png' alt='project5'/>
                    <div className='challenge-text'>Challenge 5</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal6.png' alt='project6'/>
                    <div className='challenge-text'>Challenge 6</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal9.png' alt='project9'/>
                    <div className='challenge-text'>Challenge 9</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal10.png' alt='project10'/>
                    <div className='challenge-text'>Challenge 10</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal11.png' alt='project11'/>
                    <div className='challenge-text'>Challenge 11</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal12.png' alt='project12'/>
                    <div className='challenge-text'>Challenge 12</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal13.png' alt='project13'/>
                    <div className='challenge-text'>Challenge 13</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Frank.jpg' alt='project17'/>
                    <div className='challenge-text'>Challenge 17</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal18.png' alt='project18'/>
                    <div className='challenge-text'>Challenge 18</div>
                </div>
                <div className='image-text'>
                    <img src='./images/Chal19.png' alt='project19'/>
                    <div className='challenge-text'>Challenge 19</div>
                </div>
            
        </div>
    );
}

function Contact() {
    // Variables for form submission
    const [givenName, setGivenName] = useState('');
    const [givenEmail, setGivenEmail] = useState('');
    const [givenMessage, setGivenMessage] = useState('');

    return(
        <div>
            <h2>Contact Me</h2>
            <form className='contact-form'>
                <h3>Name</h3>
                <input
                type='text'
                placeholder='Enter your name...'
                name='name'
                className='smallText'
                onChange={(e) => setGivenName(e.target.value)}
                ></input>

                <h3>Email Address:</h3>
                <input
                type='text'
                placeholder='Enter your email...'
                name='email'
                className='smallText'
                onChange={(e) => setGivenEmail(e.target.value)}    
                ></input>

                <h3>Message:</h3>
                <input
                type='text'
                placeholder='Type your message here. . .'
                name='message'
                className='bigText'
                onChange={(e) => setGivenMessage(e.target.value)}
                ></input>

                <button 
                className='contact-submit-button'
                onClick={() => {
                        // Checks for null cases
                        if(givenName == null){
                            alert('No name given! Please enter a name.');
                            return;
                        }

                        if(givenEmail == null){
                            alert('No email given! Please enter an email.');
                            return;
                        }

                        if(givenMessage == null){
                            alert('No message given! Please enter a reason of contact.');
                            return;
                        }

                        // Checks if a valid email is given
                        if(givenEmail === /.+\@.+\..+/){
                            alert('Invalid email given! Please check input.');
                            return;
                        }

                        console.log(givenName + givenEmail + givenMessage);
                        alert('Form Submitted! I will get back to you soon!');
                }}
                >Submit</button>
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