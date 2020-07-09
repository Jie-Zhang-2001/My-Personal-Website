import React, {useContext} from 'react'
import { SkillContext } from '../Pages/Skill';
import { Divider } from 'antd';
import {DownCircleOutlined} from '@ant-design/icons'

function SkillItem() {
    const {skill, desc} = useContext(SkillContext);
    return (
        <div className='skillItem'>
            <h1>{skill}</h1>
            <p>{desc}</p>
            <Divider><DownCircleOutlined /></Divider>
        </div>
    )
}

export default SkillItem;