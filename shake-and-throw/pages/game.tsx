import Link from "next/link";
import styles from "../styles/components/Home.module.css";

// pages/about.js
function About() {
  return (
    <div>
      <p>game画面</p>
      <div>
        <Link href="/#">
          <p>back to home</p>
        </Link>
      </div>
      
      <video autoPlay muted>
        <source src="/video/TateHaikei.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default About;