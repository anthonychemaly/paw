import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./ProjectsAndEvents.module.scss";

const ProjectsAndEvents = () => {
  return (
    <div>
      <h1 className="heading">PROJECTS AND EVENTS</h1>
      <h4 className={styles["subheading"]}>View All Events</h4>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsAndEvents;
