import React from 'react'
import { Menu, Divider } from 'antd';
import { NavLink } from 'react-router-dom'
import ContactIcon from './ContactIcon';
import {UsergroupDeleteOutlined} from '@ant-design/icons';

function MenuNav() {
    return (
        <div className="leftNav">
            <div className='profile'><img src ="/image/profile.png" /></div>
            <h1 className='name'>Jie Zhang</h1>
            <Menu
                mode="inline"
                theme='light'
            >
                <Menu.Item key="1" >
                    <NavLink to='/'>About</NavLink>
                </Menu.Item>
                <Menu.Item key="2" >
                    <NavLink to='/project'>Project </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to='/skill'>Skill </NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                    <NavLink to='/blog'>Blog </NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                    <NavLink to='/resume'>Resume </NavLink>
                </Menu.Item>
            </Menu>
            <Divider><UsergroupDeleteOutlined /></Divider>
            <ContactIcon />
        </div>
    )
}
export default MenuNav;