import Link from "next/link";
import ReactPlayer from "react-player";
import React, { useEffect, useRef } from "react";

// pages/about.js
const VideoPlayer = () => {
  return (
    <div>
      <p>game画面</p>
      <div>
        <Link href="/#">
          <p>back to home</p>
        </Link>
      </div>
      
      <video autoPlay muted>
        <source src="/video/haikei.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;