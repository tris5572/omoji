import styled from "styled-components";

import { useSettingStore, useValueStore } from "@/misc/store";

const CharsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export function TextView() {
  const text = useValueStore((state) => state.value);

  const array = [];
  let i = 0;

  for (const c of text) {
    array.push(<CharView c={c} key={`${i}${c}`} />);
    i++;
  }

  return <CharsWrapper>{array}</CharsWrapper>;
}

const CharBox = styled.div`
  width: fit-content;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 8px;
`;
const Char = styled.div`
  margin: 0;
  padding: 0;
  line-height: 100%;
  text-align: center;
`;
const CodeTitle = styled.span`
  font-size: small;
`;
const CodeValue = styled.span`
  font-family: monospace;
`;

function CharView({ c }: { c: string }) {
  const sizeValue = useSettingStore((st) => st.fontSize);
  const fontSize = `${sizeValue}vw`;

  return (
    <CharBox>
      <Char style={{ fontSize }}>{c}</Char>
      <CodeTitle>Unicode: </CodeTitle>
      <CodeValue>U+{c.codePointAt(0)?.toString(16).toUpperCase()}</CodeValue>
    </CharBox>
  );
}
