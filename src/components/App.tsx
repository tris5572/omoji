import { useRef } from "react";
import styled from "styled-components";

import { useValueStore } from "@/misc/store";
import { TextView } from "./TextView";

const InputBox = styled.div`
  background: ${(p) => p.theme.colors.key.main};
  padding: 8px;
  text-align: center;
`;

function App() {
  // IMEのオンオフ状態のフラグ。日本語入力中には拡大表示に反映されないようにする。
  const isIme = useRef(false);

  const changeValue = useValueStore((state) => state.changeValue);

  function handleChange(text: string) {
    if (isIme.current) {
      return; // 変換中は何もしない
    }

    // console.log(text);
    changeValue(text);
  }

  return (
    <>
      <InputBox>
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          onCompositionStart={() => (isIme.current = true)}
          onCompositionEnd={(e) => {
            isIme.current = false;
            handleChange((e.target as HTMLInputElement).value); // 入力確定時
          }}
        />
      </InputBox>
      <TextView />
    </>
  );
}

export default App;
