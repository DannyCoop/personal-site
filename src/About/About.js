import React from 'react'
import './About.css'
import CardContainer from '../Projects/CardContainer.js'


function About (props) {
    return(
        <div>
            <h2>Welcome to Coop's place</h2><br/>
            <p className="AboutMe">Hey everyone I'm a recent bootcamp grad! My main focus is Full stack web development. <br/> A little bit about me besides my bootcamp I also went to Fullsail University and a bachelor's degree in Game Design.</p>
            <div className="Projects">
                <CardContainer/>
            </div>
        </div>
        
    )
}


export default About