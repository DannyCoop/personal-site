import React from 'react'
import './About.css'
import ProjectCard from '../Projects/ProjectCard'


function About (props) {
    return(
        <div>
            <h2>Welcome to Coop's place</h2><br/>
            <p className="AboutMe">Hey everyone I'm a recent bootcamp grad! My main focus is Full stack web development. <br/> A little bit about me besides my bootcamp I also went to Fullsail University and a bachelor's degree in Game Design.</p>
            <div className="Projects">
                <ProjectCard/>
            </div>
        </div>
        
    )
}


export default About