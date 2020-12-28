import React from 'react'
import './SkillCards.css'

function SkillCards (props) {
    return(
        <div className="skill">
            {props.skill}
        </div>
    )
}

export default SkillCards