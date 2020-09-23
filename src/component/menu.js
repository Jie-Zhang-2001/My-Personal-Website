import React from 'react'
import { Menu, Divider } from 'antd';
import { NavLink } from 'react-router-dom'
import ContactIcon from './ContactIcon';
import {UsergroupDeleteOutlined} from '@ant-design/icons';

function MenuNav() {
    return (
        <div className="leftNav">
            <div className='profile'><img src ="images/profile.png"></img></div>
            <h1 className='name'>Jie Zhang</h1>
            <Menu
                mode="inline"
                theme='light'
            >
                <Menu.Item key="1" >
                    <NavLink to='/'>About</NavLink>
                </Menu.Item>
                <Menu.Item key="2" >
                    <NavLink to='/project'>Projects </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to='/skill'>Skill </NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                    <NavLink to='/blog'>Blog </NavLink>
                </Menu.Item>
            </Menu>
            <Divider><UsergroupDeleteOutlined /></Divider>
            <ContactIcon />
            <p>Copyright © 2020 Jie Zhang</p>
        </div>
    )
}
export default MenuNav;