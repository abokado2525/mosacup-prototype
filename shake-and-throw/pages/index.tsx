import type { NextPage } from "next";
import { getWindowSize } from "../hooks/GetWindowSize";
import styles from "../styles/components/Home.module.css";
import Link from "next/link";

//TODO 画面遷移する ← ボタン設置、ボタン押下で遷移
//TODO 遷移後すぐに動画を流す

const Home: NextPage = () => {
  const { height, width } = getWindowSize();

  const handleClick = () => {
    // 画面遷移の処理
  };

  return (
    <div>
      <div>
        height:{height} width:{width}
      </div>
      <div>
        <Link href="/game">
          <p>スタート</p>
        </Link>
        <Link href="/ranking">
          <p>ランキング</p>
        </Link>
        <Link href="/how_to_playing_game">
          <p>遊び方</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;

function LikeButton() {
  return <span className={styles.clickButton}>Start</span>;
}
