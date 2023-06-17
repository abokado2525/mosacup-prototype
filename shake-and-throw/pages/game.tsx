import Link from "next/link";
import React from "react";
import { Player } from "video-react";

//TODO Q. abokado branchにmainのpullできてるのに反映されないなぜ
//TODO A. pullする前にローカルファイル変更したから。git stash save  git pull origin main git stash pop
//TODO 動画の埋め込み
//TODO 加速度取得
//TODO ngrok acount touroku

// window.addEventListener("devicemotion", Game);

// pages/about.js
function Game(event: DeviceMotionEvent) {
  // event.accelerationがnull出ない場合、加速度データを取得
  const { x, y, z } = event.acceleration || { x: 0, y: 0, z: 0 };
  if (event.acceleration) {
    const { x, y, z } = event.acceleration;
  }
  return (
    <div>
      {/* <Player> */}
      {/* //TODO 動画の埋め込みできないなぜ */}
      {/* <source src="https://youtu.be/gGx5U1esKH0" type="video/mp4" /> */}
      {/* </Player> */}
      <p>game画面</p>
      <p>加速度x: {x}</p>
      <p>加速度x: {y}</p>
      <p>加速度x: {z}</p>
      <div>
        <Link href="/#">
          <p>back to home</p>
        </Link>
      </div>
    </div>
  );
}

export default Game;
