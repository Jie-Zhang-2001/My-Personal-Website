import React from 'react'
import {Rate} from 'antd'


function SkillItem(props) {
    return (
        <div className='skillItem'>
            <h1><span className='skillName'>{props.skill}</span> <Rate className='rate' disabled defaultValue={props.level} /></h1>
        </div>
    )
}

export default SkillItem;