import React, {useState} from 'react';
import SkillCards from './SkillCards';

function SkillContainer(){
    const [skills, setSkills] = useState(["JavaScript", "ruby"])

    const showSkills = () =>{
    }

    return(
        <div>
            <SkillCards/>
        </div>
    )
}

export default SkillContainer