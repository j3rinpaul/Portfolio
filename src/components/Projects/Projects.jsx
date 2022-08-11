import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import port from "../../Assets/Projects/port.png";
import giffy from "../../Assets/Projects/giffy.png";
import amd from "../../Assets/Projects/amd.png";
import reImg from "../../Assets/Projects/reImg.png";
// import suicide from "../../Assets/Projects/suicide.png";
import serbot from "../../Assets/Projects/serbot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio Website"
              description="Made Portfolio website using react.js and provided its code and other resources to Open-Source. feel free to clone that template or contribute."
              link="https://github.com/mrwolfie13/jerry_Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reImg}
              isBlog={false}
              title="reImg"
              description="Program to change the extension of an Image and also resize the image.  It's made using Python as a part of Co-Coder conducted by TinkerHub Foundation. Pillow is the python library used to make it.  "
              link="https://github.com/mrwolfie13/reImg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={giffy}
              isBlog={false}
              title="Giffy Search Engine"
              description="Search engine made for searching gifs found on the Internet. Used giffy api and madde using vanilla js as a beginner project "
              link="https://github.com/mrwolfie13/Gif_Search_Engine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amd}
              isBlog={false}
              title="AMD Website"
              description="Responsive Website build for competition purpose in our college. "
              link="https://github.com/mrwolfie13/technoship"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serbot}
              isBlog={false}
              title="Ser-bot"
              description="Discord bot for handling a server in discord. Can add or remove roles with commands and also send welcome message on new member joining the server."
              link="https://github.com/mrwolfie13/Ser_bot"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
