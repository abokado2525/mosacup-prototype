import Link from "next/link";
import styled from "../styles/components/Ranking.module.css"

// pages/about.js
function Ranking() {
  return (
    <div>
      <p className={styled.title}>ランキング画面</p>
      <div>

      </div>
        <Link href="/#">
          <p>back to home</p>
        </Link>
    </div>
  );
}

export default Ranking;
