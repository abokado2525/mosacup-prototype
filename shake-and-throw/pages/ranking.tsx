import Link from "next/link";
import styled from "../styles/components/Ranking.module.css"

// pages/about.js
function Ranking() {
  return (
    <div className={styled.box}>
      <p className={styled.title}>ランキング</p>
      <table className={styled.table}>
        <tr className={styled.cell}>
          <td>1位</td>
          <td>あああ</td>
          <td>000</td>
        </tr>
        <tr className={styled.cell}>
          <td>2位</td>
          <td>あああ</td>
          <td>000</td>
        </tr>
        <tr className={styled.cell}>
          <td>3位</td>
          <td>あああ</td>
          <td>000</td>
        </tr>
      </table>
        <Link href="/#">
          <button className={styled.back}>ホームへ戻る</button>
        </Link>
    </div>
  );
}

export default Ranking;
