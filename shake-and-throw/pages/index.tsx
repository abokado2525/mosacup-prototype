import type { NextPage } from "next";
import { getWindowSize } from "../hooks/GetWindowSize";
import styles from "../styles/components/Home.module.css";

const Home: NextPage = () => {
  const { height, width } = getWindowSize();
  return (
    <div>
      <div>
        height:{height} width:{width}
      </div>
      <div>
        <header>
          <LikeButton />
        </header>
      </div>
    </div>
  );
};

export default Home;

function LikeButton() {
  return <span className={styles.clickButton}>Start</span>;
}
