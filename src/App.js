import React from 'react';
import './App.css';
import MenuNav from './component/menu';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Row, Col, BackTop } from 'antd';
import Blog from './Pages/Blog'
import About from './Pages/About'
import Skill from './Pages/Skill'
import Project from './Pages/Project'
import './pages.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Row type='flex' justify='center'>
          <Col xs={24} xl={6}>
            <MenuNav />
          </Col>
          <Col xs={24} xl={18}>
            <div className="rightDisplay">
              <Route path='/blog' component={Blog} />
              <Route path='/skill' component={Skill} />
              <Route path='/' exact component={About} />
              <Route path='/project' component={Project} />
            </div>
          </Col>
        </Row>
        <BackTop>
          <div className='backTop'>UP</div>
        </BackTop>

      </Router>

    </div>
  );
}

export default App;
