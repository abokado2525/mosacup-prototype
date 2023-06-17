import Link from "next/link";

// pages/about.js
function Rule() {
  return (
    <div>
      <p>遊び方説明</p>
      <div>
        <Link href="/#">
          <p>back to home</p>
        </Link>
      </div>
    </div>
  );
}

export default Rule;
