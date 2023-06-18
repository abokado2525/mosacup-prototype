import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/components/Home.module.css";

//TODO 5秒でカウント止める。

const MyComponent: React.FC = () => {
  const [rotationAlpha, setRotationAlpha] = useState<number | null>(null);
  const [count, setCount] = useState<number>(0);
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [isFlagSet, setIsFlagSet] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const startListening = () => {
      interval = setInterval(() => {
        if (window.DeviceMotionEvent) {
          window.addEventListener("devicemotion", handleDeviceMotion);
        } else {
          console.log("DeviceMotionEvent is not supported");
        }
      }, 1);
    };

    const stopListening = () => {
      if (interval) {
        clearInterval(interval);
      }
      window.removeEventListener("devicemotion", handleDeviceMotion);
    };

    const handleDeviceMotion = (event: DeviceMotionEvent) => {
      const alpha: number = event.rotationRate.alpha;
      setRotationAlpha(alpha);
      if (previousValue !== null && Math.abs(alpha - previousValue) >= 100) {
        setCount((prevCount) => prevCount + 1);
      }
      setPreviousValue(alpha);
    };

    startListening();

    return () => {
      stopListening();
    };
  }, []);

  return (
    <div>
      <div>
        <Link href="/#">back home</Link>
      </div>
      <p>
        Rotation Alpha:{" "}
        {rotationAlpha !== null ? rotationAlpha.toFixed(2) : "-"}
      </p>
      <p>Count: {(count / 10).toFixed(0)}</p>
      <div className={styles.buttons}>
        <a href="/game" className={styles.btn_06}>
          シュート！
        </a>
      </div>
    </div>
  );
};

export default MyComponent;
