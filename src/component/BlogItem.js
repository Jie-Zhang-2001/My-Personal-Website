import React from 'react'
import { CalendarOutlined } from '@ant-design/icons'

function BlogItem(props) {
    return (
        <div className='blogItem'>
            <div className='blogtitle'>{props.title}</div>
            <div className='date'><CalendarOutlined />  {props.date}</div>
            <div className='blogIntro'>{props.intro}</div>
            <img className='blogImg' alt='Blog' src={props.imgsrc} />
        </div>
        
    )
}

export default BlogItem;