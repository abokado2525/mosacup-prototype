import { useState, useEffect } from "react";
import Link from "next/link";

// acculate.tsxなのに加速度でなく角速度を取得してるのおもろ。
// chat-GPT参考
// 参考リンク：https://www.slideshare.net/i_Pride/javascript-155758139

//TODO 符号が変わったらカウントする。それを一旦出力。

const MyComponent = () => {
  // 数値の空配列を作成
  //! setRotationRateDataいらない？なわけねーだろカス。
  //! setRotationRateDataでrotationRateDataを更新してるだろカス。
  let [rotationRateData, setRotationRateData] = useState<number[]>([]);
  // ボタンの状態を管理
  let [isListening, setIsListening] = useState(false);

  // イベントリスナーとタイマーを定義 // eventListenerがundefinedの時初期化されてない
  let eventListener: EventListener | undefined;
  // タイマーを定義
  let timeout: NodeJS.Timeout | undefined;

  // 速度の符号が変わったタイミングを１回振ったとする
  let count = 0;

  let rotation_alpha = 0; //alpha軸の端末の速度取得する変数

  const startListening = () => {
    setIsListening(true);
    eventListener = (event: DeviceMotionEvent) => {
      rotation_alpha = event.rotationRate.alpha;
      console.log(rotation_alpha);
      // 取得したalpha軸の速度を配列rotationRateDataに追加
      setRotationRateData([...rotationRateData, rotation_alpha]);
      /* //! 計測が終わる瞬間しか値を配列に格納できてない
      // 速度の符号が変わったタイミングを１回振ったとする
      if (
        rotationRateData[rotationRateData.length - 1] *
          rotationRateData[rotationRateData.length - 2] <
        0
      ) {
        count += 1;
      }
*/
    };
    // addEventListener() は EventTarget インターフェイスのメソッドで、
    // ターゲットに特定のイベントが配信されるたびに呼び出される関数を設定します。
    window.addEventListener("devicemotion", eventListener);
    timeout = setTimeout(stopListening, 5000);
  };

  const stopListening = () => {
    setIsListening(false);
    if (eventListener) {
      window.removeEventListener("devicemotion", eventListener);
    }
    if (timeout) {
      clearTimeout(timeout);
    }
  };

  // ボタンを押したときに実行
  useEffect(() => {
    startListening();
    stopListening();

    return () => {
      stopListening();
    };
  }, []);

  return (
    <div>
      <div>
        <Link href="/#">
          <p>back to home</p>
        </Link>
      </div>
      <button onClick={startListening} disabled={isListening}>
        速度計測
      </button>
      <p>現在の速度: {rotation_alpha}</p>
      <div>
        {isListening ? (
          <p>計測中</p>
        ) : (
          <ul>
            <p>配列の要素数は: {rotationRateData.length}</p>
            {rotationRateData.map((element) => (
              <li key={element}>{element}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyComponent;
