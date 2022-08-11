import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./CertificateCard";
import Particle from "../Particle";
import port from "../../Assets/Certificate/python.png";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Certification & <strong className="purple"> Achievements </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <CertificateCards
              imgPath={port}
              isBlog={false}
              title="Python Certification"
              description="Basic Python Certification by Hackerrank.It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes"
              link="https://www.hackerrank.com/certificates/131cece338ad"
            />
          </Col>

         

        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;