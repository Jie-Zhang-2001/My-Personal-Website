import React from 'react'
import { LinkedinFilled, FileTextOutlined, GithubOutlined } from '@ant-design/icons';
function ContactIcon() {
    return (
        <div className='contactIcon'>
            <a title='LinkedIn' href= 'https://www.linkedin.com/in/jie-zhang-54a2b2160/'><LinkedinFilled /></a>
            <a title='Blog'href='http://www.blog-jz.com'><FileTextOutlined /></a>
            <a title='Github'href = 'https://github.com/Jie-Zhang-2001'><GithubOutlined /></a>
        </div>
    )
}

export default ContactIcon;