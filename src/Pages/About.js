import React from "react";
import { Row, Col, Timeline } from "antd";
import { ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";

function About() {
  return (
    <div className="intro">
      <h1>Welcome!</h1>
      <p>
        I am currently a Junior student at Stony Brook University pursuing a
        Bachelor of Science degree in Computer Science.
      </p>

      <p>
        Prior experience with Java, JavaScript, and Web Development, I
        am eager to contribute and acquire knowledge in the Software Engineering
        field.
      </p>

      <Row type="flex" justify="space-between">
        <Col className="education" xs={24} lg={12}>
          <h1 className="timelineTitle">Education</h1>
          <Timeline pending=" ">
            <Timeline.Item dot={<ClockCircleOutlined />}>
              <h3 className="school">Stony Brook University</h3>
              <p>2019 - 2023 Bachelor of Science in Computer Science</p>
                          <h4>Relevant Courses:</h4>
                          <ol>
                              <li>
                                  Data Structures
                              </li>
                              <li>
                                  Object-Oriented Programming
                              </li>
                              <li>
                                  Foundations of Computer Science (Discrete Mathematics)
                              </li>
                              <li>
                                Math Courses (Linear Algebra, Calculus...)
                              </li>
                          </ol>
              <h4>GPA: 3.93 / 4.0</h4>
            </Timeline.Item>
          </Timeline>
        </Col>
        <Col xs={24} lg={12} className="experience">
          <h1 className="timelineTitle">Projects </h1>
          <Timeline pending="Please visit Projects for more...">
            <Timeline.Item>
              <h3>Content Management System / Personal Blog Site</h3>
              <p className="projectDate">
                <CalendarOutlined /> Jul. 2020 - Aug. 2020
              </p>
              <h4 className="projectDesc">
                A content management system allowing creation, modification, and
                deletion of articles in markdown format...
              </h4>
              <h4>Languages/Tools:</h4>
              <h4>
                JavaScript, React.js, Node.js, Next.js, Express.js, MongoDB,
                HTML/CSS, Ant Design
              </h4>
            </Timeline.Item>
            <Timeline.Item>
              <h3>Clique.IO</h3>
              <p className="projectDate">
                <CalendarOutlined /> May 2020 - Jul. 2020
              </p>
              <h4 className="projectDesc">
                Provides a platform for college students to find team members
                for their projects or find a project to contribute to, allowing
                students to radiate their energy and creativity...
              </h4>
              <h4>Languages/Tools: HTML, CSS, JavaScript, BootStrap</h4>
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
  );
}
export default About;
