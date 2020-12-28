import React, {useState} from 'react';
import SkillCards from './SkillCards';

function SkillContainer(){
    const [skills, setSkills] = useState(["JavaScript", "ruby"])

    const showSkills = () => {
        return skills.map(skill => <SkillCards
            skill = {skill}    
        />)
    }

    return(
        <div>
            {showSkills()}
        </div>
    )
}

export default SkillContainer