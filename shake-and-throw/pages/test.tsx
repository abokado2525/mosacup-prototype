//! 検証終わったら削除する！

import { useEffect, useState } from "react";

const MyComponent: React.FC = () => {
  const [rotationAlpha, setRotationAlpha] = useState<number | null>(null);

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
      const alpha = event.rotationRate.alpha;
      setRotationAlpha(alpha);
    };

    startListening();

    return () => {
      stopListening();
    };
  }, []);

  return (
    <div>
      <p>
        Rotation Alpha:{" "}
        {rotationAlpha !== null ? rotationAlpha.toFixed(2) : "-"}
      </p>
    </div>
  );
};

export default MyComponent;
