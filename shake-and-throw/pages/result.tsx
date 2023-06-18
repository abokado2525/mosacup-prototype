import Link from "next/link";
import styled from "../styles/components/Result.module.css";

function Result() {
  return (
    <div className={styled.background}>
      <div className={styled.box}>
        <h1 className={styled.result_box}>結果</h1>
        <div className={styled.result_font}>
            <p className={styled.font1}>記録</p>
            <p className={styled.font2}>00m</p>
            <p className={styled.font1}>順位</p>
            <p className={styled.font2}>00位</p>
        </div>
        <a href="/#" className={styled.btn_06}>ホームに戻る</a>
      </div>
    </div>
  );
}

export default Result;