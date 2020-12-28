import React, {useState} from 'react';
import SkillCards from './SkillCards';
import './skillContainer.css'

function SkillContainer(){
    const [skills, setSkills] = useState(["JavaScript", "ruby"])

    const showSkills = () => {
        return skills.map(skill => <SkillCards
            skill = {skill}    
        />)
    }

    return(
        <div className= "skill-container">
            {showSkills()}
        </div>
    )
}

export default SkillContainer