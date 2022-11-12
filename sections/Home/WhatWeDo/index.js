import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import WhatWeDoCard from "../../../components/Home/WhatWeDo/WhatWeDoCard";

import styles from "./WhatWeDo.module.scss";

const WhatWeDo = () => {
  var cards = [
    { id: 0, url: "https://picsum.photos/300/300" },
    { id: 1, url: "https://picsum.photos/300/300" },
    { id: 2, url: "https://picsum.photos/300/300" },
  ];

  return (
    <Container>
      <h1 className="heading">What We Do</h1>
      <Row className={styles['what-we-do-row']}>
        {cards.map((item) => (
          <Col key={item?.id}>
            <WhatWeDoCard url={item?.url} backgroundColor={"red"} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhatWeDo;
