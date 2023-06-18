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
    <div className={styles.home}>
      <h1 className={styles.title}>タイトル</h1>
      <div className={styles.button}>
        {/* <Link href="/game">
        <button className={styles.start} type="button">スタート</button>
        </Link> */}
        {/* 画像アップロード */}
        <div className={styles.buttons}>
          {/*<button className={styles.start} type="button" onClick={() => setShow(true)}>スタート</button>*/}
          <a
            href="javascript:void(0)"
            className={styles.btn_06}
            onClick={() => setShow(true)}
          >
            スタート
          </a>
          <Modal show={show} setShow={setShow} />
        </div>

        {/* ポップアップのテンプレート
        <div>
          <button onClick={() => setShow(true)}>Click</button>
          <Modal show={show} setShow={setShow} />
        </div> */}

        <div className={styles.buttons}>
          <a href="/ranking" className={styles.btn_06}>
            ランキング
          </a>
        </div>
        <div className={styles.buttons}>
          <a href="/how_to_playing_game" className={styles.btn_06}>
            遊び方
          </a>
        </div>
        {/*<Link href="/how_to_playing_game">
        <button className={styles.rule} type='button'>遊び方</button>
      </Link>*/}
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
          <button onClick={() => setShow(false)}>戻る</button>
          <p>ユーザー名を入力してください</p>
          <UserName />
<<<<<<< HEAD
          <p>画像を選択してください</p>
          <FileUp />
=======
        <p>画像を選択してください</p>
        <FileUp />
>>>>>>> main

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
