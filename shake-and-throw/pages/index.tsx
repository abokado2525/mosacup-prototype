import type { NextPage } from "next";
import { getWindowSize } from "../hooks/GetWindowSize";
import styles from "../styles/components/Home.module.css";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import UserName from "./userName";
import FileUp from "./fileUp";

//? DeviceMotionEvent: 加速度を取得する
//! FirefoxとChromeで動作が異なる
//? https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent

//? DeviceOrientationEvent: 角度を取得する
//? https://developer.mozilla.org/ja/docs/Web/API/DeviceOrientationEvent

const Home: NextPage = () => {
  const { height, width } = getWindowSize();
  const [show, setShow] = useState(false);

  // TODO chat-GPTに下の書き方聞いたので、実装してみる
  /*
  window.addEventListener("devicemotion", (event) => {
    console.log(`${event.acceleration.x} m/s2`);
  });
  */

  return (
    <div className={styles.Home}>
      <h1 className={styles.title}>タイトル</h1>
      <div className={styles.buttons}>
        {/* <Link href="/game">
        <button className={styles.start} type="button">スタート</button>
        </Link> */}
        {/* 画像アップロード */}
        <div>
          <button
            className={styles.start}
            type="button"
            onClick={() => setShow(true)}
          >
            スタート
          </button>
          <Modal show={show} setShow={setShow} />
        </div>

        {/* ポップアップのテンプレート
        <div>
          <button onClick={() => setShow(true)}>Click</button>
          <Modal show={show} setShow={setShow} />
        </div> */}

        <Link href="/ranking">
          <button className={styles.ranking} type="button">
            ランキング
          </button>
        </Link>
        <Link href="/how_to_playing_game">
          <button className={styles.rule} type="button">
            遊び方
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ show, setShow }: Props) {
  if (show) {
    return (
      <div className={styles.overlay}>
        <div className={styles.content}>
          <p>ユーザー名を入力してください</p>
          <UserName />
          <p>画像を選択してください</p>
          <FileUp />

          <Link href="/game">
            <button onClick={() => setShow(false)}>ゲーム開始！</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
