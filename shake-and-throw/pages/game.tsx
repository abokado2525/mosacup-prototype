import Link from "next/link";
import ReactPlayer from "react-player";

// pages/about.js
function About() {
  return (
    <div>
      <p>game画面</p>
      <div>
        <Link href="/#">
          <p>back to home</p>
        </Link>
      </div>
      {/* //TODO 動画埋め込みできてない */}
      <ReactPlayer
        url="/video/haikei.mp4"
        playing={true}
        loop={false}
        width={"100%"}
        height="auto"
      />
    </div>
  );
}

export default About;
