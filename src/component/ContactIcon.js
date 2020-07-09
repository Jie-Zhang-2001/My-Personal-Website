import React from 'react'
import { LinkedinFilled, FacebookFilled, MailOutlined, GithubOutlined } from '@ant-design/icons';
function ContactIcon() {
    return (
        <div className='contactIcon'>
            <a href= 'https://www.linkedin.com/in/jie-zhang-54a2b2160/'><LinkedinFilled /></a>
            <a><FacebookFilled /></a>
            <a><GithubOutlined /></a>
        </div>
    )
}

export default ContactIcon;