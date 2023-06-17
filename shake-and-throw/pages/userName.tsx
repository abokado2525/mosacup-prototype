import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  /* ↓state変数「addText」を定義 */
  const [addText, setAddText] = useState("");

  /* ↓関数onClickAddTextを定義 */
  const onClickAddText = () => {
    setAddText(text);
    setText("");
  }

  return (
    <div className="App">
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      {/* ↓buttonを追加 */}
      <button onClick={onClickAddText}>追加</button>

      {/* ↓pタグを追加 */}
      <p>ユーザ名：{addText}</p>
    </div>
  );
};

export default App;