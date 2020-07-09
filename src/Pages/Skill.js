import React, { useEffect, useState, createContext } from 'react'
import SkillItem from '../component/SkillItem'
import { Row } from 'antd';


export const SkillContext = createContext();




function Skill() {
    const [list, setList] = useState([]);

    useEffect(() => {
      const fetchData =  async () => {
          const url = 'http://localhost:4000/skills';
          const data = await fetch(url);
          const item = await data.json();
          setList(item);
        }
        fetchData();
    }, [])
    return (
        <Row type='flex' justify='center'>
            {list.map((item, index) => (
                <SkillContext.Provider value={{ skill: item.skill, desc: item.description }} key={index} >
                    <SkillItem />
                </SkillContext.Provider>
            ))}
        </Row>)

}

export default Skill;