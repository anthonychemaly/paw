import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./MeetOurRescues.module.scss";

const MeetOurRescues = () => {
  var photos = [
    [
      {
        id: 0,
        url: ["https://picsum.photos/300/300"],
        lg: 5,
      },
      { id: 1, url: ["https://picsum.photos/300/300"], lg: 4 },
      {
        id: 2,
        url: ["https://picsum.photos/300/300", "https://picsum.photos/300/300"],
        lg: 3,
      },
    ],
    [
      { id: 0, url: ["https://picsum.photos/300/300"], lg: 5 },
      {
        id: 1,
        url: ["https://picsum.photos/300/300", "https://picsum.photos/300/300"],
        lg: 2,
      },
      { id: 2, url: ["https://picsum.photos/300/300"], lg: 5 },
    ],
  ];

  return (
    <div>
      <h1 className="heading">MEET OUR RESCUES</h1>
      <Container fluid>
        {photos.map((row, i) => (
          <Row key={i}>
            {row.map((item) => (
              <Col
                key={item.id}
                className={styles["photo-col"]}
                lg={item.lg}
                style={{ height: 300 }}
              >
                {item.url.map((img, ind) => (
                  <div
                    key={ind}
                    style={{
                      height: 300 / item.url.length,
                      width: "100%",
                      background: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      border: "1px solid white",
                    }}
                  />
                ))}
              </Col>
            ))}
          </Row>
        ))}
        <Row className={styles["read-more-bar"]}>READ MORE</Row>
      </Container>
    </div>
  );
};

export default MeetOurRescues;
