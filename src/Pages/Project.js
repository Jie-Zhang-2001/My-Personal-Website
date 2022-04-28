import React from 'react'
import ProjectItem from '../component/ProjectItem'
import {Row } from 'antd';

// export const ProjectContext = createContext();

function Project() {
    // const [project, setProject] = useState([]);

    const projectList = [
        {
            title: 'Clique.IO',
            desc: 'Provides a platform for college students to find team members for their projects or find a project to contribute to, allowing students to radiate their energy and creativity...',
            src: '/image/cliqueCollab.jpeg',
            link:'http://cliqueio.com'

        },
        {
            title: 'Personal Blog Site/Content Management System',
            desc: 'A content management system built with React.js and Node.js, allowing creation and modification of articles in markdown format...',
            src: '/image/create.jpeg',
            link:'http://www.blog-jz.com'
        },
        {
            title: 'Custom Text-Based Adventure Game',
            desc: 'A user-customizable text-based adventure game, allowing users to create their own scenes and to control game flow...',
            src: '/image/game.jpeg',
            link:'https://github.com/Jie-Zhang-2001/Custom-Text-Based-Adventure-Game'
        },
        {
            title: 'Equation Calculator',
            desc: 'An equation calculator that allows for conversion between postfix and infix form, calculation of final result, validation of equation input from the user...',
            src: '/image/calculator.jpeg',
            link:'https://github.com/Jie-Zhang-2001/Equation-Calculator'
        },
        {
            title: 'Weather',
            desc: 'Utilizing outside API to allow for checking of weather at user given location...',
            src: '/image/weather.jpeg',
            link:'https://zhang-weather-web-server.herokuapp.com/'
        },
        {
            title: 'Grocery Store Inventory System',
            desc: 'A program simulating an inventory system of a grocery store, processing sales and managing amount of items available/whether a resupply is needed, by using a Hash Table... ',
            src: '/image/grocery.jpeg',
            link:'https://github.com/Jie-Zhang-2001/Grocery-Store-Inventory-System'
        },
        {
            title: 'Organ Transplant Management System',
            desc: 'Ultilized Graph data Structure to develop a system that matches organ donors with potential transplant recipients by blood type, age, and organ type...',
            src: '/image/organTransplant.jpeg',
            link:'https://github.com/Jie-Zhang-2001/Organ-Transplant-Matching-System'
        },
        {
            title: 'Train Station Simulation',
            desc: 'Ultilized Linked-List data Structure to develop a system that monitors train arrival time and track avalibility to avoid conflicts...',
            src: '/image/train.jpeg',
            link:'https://github.com/Jie-Zhang-2001/Train-Station-Simulation'
        },
        {
            title: 'Bank Ledger',
            desc: 'Simulation of bank ledger that allows users to track transactions and filter transactions as they need...',
            src: '/image/bank.jpeg',
            link:'https://github.com/Jie-Zhang-2001/Bank-Ledger'
        },
        {
            title: 'Restaurant Simulation',
            desc: 'Ultilized Queue data Structure to develop a simulation of restaurants monitoring maximum capacity, customer wait-time, preparation time, and daily sales... ',
            src: '/image/restaurant.jpeg',
            link:'https://github.com/Jie-Zhang-2001/Restaurant-Simulation'
        },
        {
            title: 'User Instruction',
            desc: 'A detailed instruction of how to make tea...',
            src: '/image/create.jpeg',
            link: '/image/CSE_300_User_Instruction.pdf'
        },
        {
            title: 'Press Release',
            desc: 'News about the release of Nintendo Switch OLED...',
            src: '/image/game.jpeg',
            link: '/image/CSE_300_Press_Release.pdf'
        },
        {
            title: 'Problem Solving Project',
            desc: 'Worked with a team of students on solving zoom meeting issues.',
            src: '/image/game.jpeg',
            link: '/image/CSE_300_Press_Release.pdf'
        }

    ]
    // useEffect(() => {
    //     const fetchData =  async () => {
    //         const url = 'http://localhost:4000/projects';
    //         const data = await fetch(url);
    //         const item = await data.json();
    //         setProject(item);
    //       }
    //       fetchData();
    //   }, [])

    return (
        <div>
            <Row type='flex' justify='space-around'>
                {projectList.map((item, index) => (
                    // <ProjectContext.Provider value={{ title: item.title, desc: item.desc, src: item.src }} key={index}>
                    //     <ProjectItem />
                    // </ProjectContext.Provider>
                    <ProjectItem title={item.title} desc={item.desc} src={item.src} link={item.link} key={index} />
                ))}
            </Row>
        </div>)
}

export default Project;