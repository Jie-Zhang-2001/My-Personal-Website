import React from 'react'
import { LinkedinFilled, FileTextOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
function ContactIcon() {
    return (
        <div className='contactIcon'>
            <a title='LinkedIn' href= 'https://www.linkedin.com/in/jie-zhang-54a2b2160/'><LinkedinFilled /></a>
            <a title='Github' href='https://github.com/Jie-Zhang-2001'><GithubOutlined /></a>
            <a title='Email' href="mailto:jiezhang159@gmail.com"><MailOutlined /></a>
        </div>
    )
}

export default ContactIcon;