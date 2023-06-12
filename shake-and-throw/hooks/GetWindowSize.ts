import { useEffect, useState } from "react";

export const getWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    /*
    ! Next.js はpre-renderingを行うため、Hooks側でブラウザ側にしか存在しない
    ! グローバルオブジェクトのwindowやdocumentを参照する場合必ず以下の文が必要
    ! if (typeof window !== "undefined") { ... }
    参考：https://zenn.dev/developanda/articles/daf34873fe4ef4
    */
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    }
  }, []);
  return windowSize;
};
