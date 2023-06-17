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

  const handleClick = () => {
    // 画面遷移の処理
  };
  // TODO chat-GPTに下の書き方聞いたので、実装してみる
  /*
  window.addEventListener("devicemotion", (event) => {
    console.log(`${event.acceleration.x} m/s2`);
  });
  */

  return (
    <div>
      <div>
        {/* ↓は画面サイズを取得して表示してるだけ。必要ならこの変数でボタンサイズの設定とかするといいかもね */}
        height:{height} width:{width}
      </div>
      <div>
        <Link href="/game">
          <p>スタート!</p>
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
