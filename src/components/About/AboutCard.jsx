import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jerin Paul </span>
            from <span className="purple"> Kerala, India.</span>
            <br />I am a Computer Science and Engineering Student in  
            Government Engineering College Idukki.
            <br />
            <br />
            Besides Programming, some other activities that I crave to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
