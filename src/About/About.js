import React from 'react'
import './About.css'
import CardContainer from '../Projects/CardContainer.js'
import SkillContainer from '../SkillCard/skillContainers'


function About (props) {
    // Need to see if I'm able to push
    return(
        <div>
            <h2>Welcome to Coop's place</h2><br/>
            <p className="AboutMe">Hey everyone I'm a recent bootcamp grad! My main focus is Full stack web development. <br/> A little bit about me besides my bootcamp I also went to Fullsail University and a bachelor's degree in Game Design.</p>
            <div>
                <h3>Current project</h3>
                <h4>Tribe</h4>
                <textarea>Tribe is the project that I've been working on lately.Tribe is a reboot of my final project Family center that I was able to get some friends to help me with.</textarea>
            </div>
            <div>
                <h3>interest </h3>
                <textarea>I'm really in to games and hanging out with my friends. I was able to join  a hackathon and i plan on doing more.</textarea>
            </div>
            <div className="Projects">
                <CardContainer/>
            </div>
            <div className="Skills">
                <SkillContainer/>
            </div>
        </div>
        
    )
}


export default About