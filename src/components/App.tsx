import { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";

import { useSettingStore, useValueStore } from "@/misc/store";
import { TextView } from "./TextView";
import { DARK_THEME, LIGHT_THEME } from "@/misc/theme";

const Body = styled.div`
  background: ${(p) => p.theme.colors.background.main};
  color: ${(p) => p.theme.colors.text.main};
  height: 100dvh;
`;
const InputBox = styled.div`
  background: ${(p) => p.theme.colors.key.main};
  padding: 8px;
  text-align: center;
`;

function App() {
  // テーマを設定
  const darkFlag = useSettingStore((st) => st.darkFlag);
  const theme = darkFlag ? DARK_THEME : LIGHT_THEME;

  // IMEのオンオフ状態のフラグ。日本語入力中には拡大表示に反映されないようにする。
  const isIme = useRef(false);

  const changeValue = useValueStore((state) => state.changeValue);

  function handleChange(text: string) {
    if (isIme.current) {
      return; // 変換中は何もしない
    }

    changeValue(text);
  }

  return (
    <ThemeProvider theme={theme}>
      <Body>
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
      </Body>
    </ThemeProvider>
  );
}

export default App;
