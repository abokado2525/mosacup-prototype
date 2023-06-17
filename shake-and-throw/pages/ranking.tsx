import Link from "next/link";

// pages/about.js
function Ranking() {
  return (
    <div>
      <p>ランキング画面</p>
      <div>
        <Link href="/#">
          <p>back to home</p>
        </Link>
      </div>
    </div>
  );
}

export default Ranking;
