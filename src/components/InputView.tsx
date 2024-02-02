import { useRef } from "react";
import styled from "styled-components";
import { FaGear } from "react-icons/fa6";

import { useSettingStore, useValueStore } from "@/misc/store";
import { MAX_FONT_SIZE, MIN_FONT_SIZE } from "@/misc/constants";

const Box = styled.div`
  background: ${(p) => p.theme.colors.key.main};
  padding: 8px;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
const Blank = styled.div``;
const SliderBox = styled.div`
  padding-top: 0.1rem;
`;

const SettingButtonStyle = styled(FaGear)`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translate(0, -50%);
  color: ${(p) => p.theme.colors.background.main};
  padding: 4px;
  border: 1px solid ${(p) => p.theme.colors.background.transparent};
  border-radius: 4px;
  cursor: pointer;
`;

/** 入力部 */
export function InputView() {
  return (
    <Box>
      <Flex>
        <TextInput />
        <Blank>{"　"}</Blank>
        <SizeInput />
      </Flex>
      <SettingButton />
    </Box>
  );
}

/** テキスト入力ボックス */
function TextInput() {
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
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        onCompositionStart={() => (isIme.current = true)}
        onCompositionEnd={(e) => {
          isIme.current = false;
          handleChange((e.target as HTMLInputElement).value); // 入力確定時
        }}
      />
    </div>
  );
}

function SizeInput() {
  const [fontSize, setFontSize] = useSettingStore((st) => [
    st.fontSize,
    st.setFontSize,
  ]);

  return (
    <SliderBox>
      <input
        type="range"
        id="fontSize"
        min={MIN_FONT_SIZE}
        max={MAX_FONT_SIZE}
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
      />
    </SliderBox>
  );
}

/** 設定画面を呼び出すボタン */
function SettingButton() {
  const open = useSettingStore((st) => st.openSettingView);

  return <SettingButtonStyle onClick={open} />;
}
