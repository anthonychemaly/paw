import React from "react";

import { Carousel } from "react-bootstrap";
import styles from "./Slider.module.scss";

const Slider = () => {
  let arr = [...Array(6)];

  return (
    <Carousel indicators={false}>
      {arr.map((item, i) => (
        <Carousel.Item key={i} className={styles["slide"]}>
          hi
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
