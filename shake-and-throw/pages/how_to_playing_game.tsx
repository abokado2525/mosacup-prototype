import Link from "next/link";
import styled from "../styles/components/Rule.module.css";

// pages/about.js
function Rule() {
  return (
    <div className={styled.background}>
      <div className={styled.box}>
        <p className={styled.title}>遊び方説明</p>
        <div className={styled.explanation}>
          <p className={styled.font}>1.投げたいものの画像を選ぶ</p>
          <p className={styled.font}>2.スマホを振って、パワーを貯める</p>
          <p className={styled.font}>3.画面をタップして、投げる</p>
        </div>
        <a href="/#" className={styled.btn_06}>
          ホームに戻る
        </a>
        {/* <Link href="/#">back to home</Link> */}
      </div>
    </div>
  );
}

export default Rule;
