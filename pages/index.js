import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/common/Navbar";
import MeetOurRescues from "../sections/Home/MeetOurRescues";
import ProjectsAndEvents from "../sections/Home/ProjectsAndEvents";
import Slider from "../sections/Home/Slider";
import WhatWeDo from "../sections/Home/WhatWeDo";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Slider />
      <WhatWeDo />
      <MeetOurRescues />
      <ProjectsAndEvents />
    </div>
  );
}
