import React from "react";

import styles from "./WhatWeDoCard.module.scss";

const WhatWeDoCard = ({ url, backgroundColor }) => {
  return (
    <div
      className={styles["card"]}
      style={{
        backgroundImage: `url(${url}), linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6)`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles["card-top-label"]}>
        <h2 className={styles["heading"]}>COMMUNITY OUTREACH</h2>
        <h4 className={styles["subheading"]}>Read More</h4>
      </div>

      <div
        className={styles["card-bottom-label"]}
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <span>Read More</span>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
