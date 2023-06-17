import type { NextPage } from "next";
import { getWindowSize } from "../hooks/GetWindowSize";
import styles from "../styles/components/Home.module.css";
import Link from "next/link";

//? DeviceMotionEvent: 加速度を取得する
//! FirefoxとChromeで動作が異なる
//? https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent

//? DeviceOrientationEvent: 角度を取得する
//? https://developer.mozilla.org/ja/docs/Web/API/DeviceOrientationEvent

const Home: NextPage = () => {
  const { height, width } = getWindowSize();

  return (
    <div className={styles.Home}>
      <h1 className={styles.title}>タイトル</h1>
      <div className={styles.buttons}>
        <Link href="/game">
          <button className={styles.start} type="button">
            スタート
          </button>
        </Link>
        <Link href="/ranking">
          <button className={styles.ranking} type="button">
            ランキング
          </button>
        </Link>
        <Link href="/how_to_playing_game">
          <button className={styles.rule}>遊び方</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
