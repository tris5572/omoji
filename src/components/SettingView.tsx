import { useSettingStore } from "@/misc/store";
import styled from "styled-components";

const Transparent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: hsla(0, 0%, 100%, 50%);
  z-index: 10000;
`;
const Box = styled.div`
  background: ${(p) => p.theme.colors.key.dark};
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
  padding: 1rem;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: small;
`;
const CheckboxLabel = styled.label`
  margin-left: 0.5rem;
`;

export function SettingView() {
  return (
    <Transparent>
      <Box>
        <Title>表示設定</Title>
        <DarkMode />
        <Unicode />
      </Box>
    </Transparent>
  );
}

function DarkMode() {
  const [isDarkMode, setDarkMode] = useSettingStore((st) => [
    st.darkFlag,
    st.setDarkFlag,
  ]);

  return (
    <div>
      <input
        type="checkbox"
        id="dark-mode"
        checked={isDarkMode}
        onChange={() => setDarkMode(!isDarkMode)}
      />
      <CheckboxLabel htmlFor="dark-mode">ダークモード</CheckboxLabel>
    </div>
  );
}

function Unicode() {
  const [flag, setFlag] = useSettingStore((st) => [
    st.unicodeFlag,
    st.setUnicodeFlag,
  ]);

  return (
    <div>
      <input
        type="checkbox"
        id="unicode"
        checked={flag}
        onChange={() => setFlag(!flag)}
      />
      <CheckboxLabel htmlFor="unicode">Unicode表示</CheckboxLabel>
    </div>
  );
}
