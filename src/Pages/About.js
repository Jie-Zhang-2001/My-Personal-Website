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
        <Col className="education" xs={24} lg={8}>
          <h1 className="timelineTitle">Education</h1>
          <Timeline pending=" ">
            <Timeline.Item dot={<ClockCircleOutlined />}>
              <h3 className="school">Stony Brook University</h3>
              <p>2019 - 2023 Bachelor of Science in Computer Science</p>
                <h4>Relevant Courses:</h4>
                  <ol>
                      <li>
                          Software Engineering
                      </li>
                      <li>
                          Algorithms
                      </li>
                      <li>
                          Data Structures
                      </li>
                      <li>
                          Computer Networks
                      </li>                
                      <li>
                          Object-Oriented Programming
                      </li>
                      <li>
                          Systems Fundamentals
                      </li>
                  </ol>
              <h4>GPA: 3.93 / 4.0</h4>
            </Timeline.Item>
          </Timeline>
        </Col>
        <Col xs={24} lg={8} className="experience">
          <h1 className="timelineTitle">Experience </h1>
          <Timeline>
            <Timeline.Item>
              <h3>Interative Brokers: Software Engineer Intern</h3>
              <p className="projectDate">
                <CalendarOutlined /> June. 2021 - Aug. 2021
              </p>
              <ol>
                      <li>
                        Designed a web-based tool using Node.js, Vue.js, Express.js, and Elasticsearch to automate intake of Jira tickets, resulting in
                        a 30% decrease in development time for the software engineers throughout the company.
                      </li>
                      <li>
                        Developed an internal tool using Spring Boot, TypeScript, and Elasticsearch to allow designers to efficiently organize Adobe
                        XD files, expediting design mockup requests by over 20%.
                      </li>
                      <li>
                        Collaborated with UI designers and a team of 5 software engineers through daily stand-up meetings, resulting in the
                        completion of the assigned project two weeks before the expected deadline.
                      </li>
                  </ol>
            </Timeline.Item>
            <Timeline.Item>
              <h3>Undergraduate Teaching Assistant: Data Structures</h3>
              <p className="projectDate">
                <CalendarOutlined /> Jan. 2021 - June. 2021
              </p>
              <ol>
                      <li>
                          Supported over 120 students in understanding the fundamentals of data structures and algorithms, along with
                          various paradigms and techniques of programming.
                      </li>
                      <li>
                          Hosted weekly recitations that guided undergraduate students in debugging and optimizing their programs.
                      </li>
                      <li>
                          Worked closely with the professor to facilitate student learning and engagement through weekly office hours and resolved
                          additional concerns through discussion boards and emails.
                      </li>
                  </ol>
            </Timeline.Item>
          </Timeline>
        </Col>
        <Col xs={24} lg={8} className="experience">
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
