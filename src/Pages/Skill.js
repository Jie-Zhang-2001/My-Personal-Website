import React, {createContext } from 'react'
import SkillItem from '../component/SkillItem'
import { Row, Col, List } from 'antd';


export const SkillContext = createContext();




function Skill() {
    // const [list, setList] = useState([]);

    // useEffect(() => {
    //   const fetchData =  async () => {
    //       const url = 'http://localhost:4000/skills';
    //       const data = await fetch(url);
    //       const item = await data.json();
    //       setList(item);
    //     }
    //     fetchData();
    // }, [])

    const skills = [
        {
            skillName: 'Java',
            level: '4',
        },
        {
            skillName: 'JavaScript',
            level: '4',
        },
        {
            skillName: 'HTML',
            level: '5',
        },
        {
            skillName: 'CSS',
            level: '5',
        },
    ];

    const tools = [
        {
            skillName: 'Node.js',
            level: '4',
        },
        {
            skillName: 'React.js',
            level: '4',
        },
        {
            skillName: 'Express.js',
            level: '4',
        },
        {
            skillName: 'Next.js',
            level: '3',
        },
        {
            skillName: 'Git',
            level: '4',
        },
        {
            skillName: 'MongoDB',
            level: '4',
        },
        {
            skillName: 'Bootstrap',
            level: '4',
        },
    ];

    return (
        <Row className="skillSection" type='flex' justify='space-around'>
            <Col xs={24} lg={12} xl={12}>
                <List 
                    header={<div className='language'>Languages:</div>}
                    itemLayout='vertical'
                    dataSource={skills}
                    renderItem={item => (
                        <List.Item>
                            <SkillItem skill={item.skillName} level={item.level}/>
                        </List.Item>
                    )}
                />
            </Col>
            <Col xs={24} lg={12}  xl={12}>
            <List 
                    header={<div className='tool'>Tools/Frameworks:</div>}
                    itemLayout='vertical'
                    dataSource={tools}
                    renderItem={item => (
                        <List.Item>
                            <SkillItem skill={item.skillName} level={item.level}/>
                        </List.Item>
                    )}
                />
            </Col>
            <div className='skillImg'><img alt='Skills' src='/image/skills.jpeg'/></div>
        </Row>)

}

export default Skill;