import styled from "styled-components";

import { useValueStore } from "@/misc/store";

const CharsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export function TextView() {
  const text = useValueStore((state) => state.value);

  const array = [];

  for (const s of text) {
    array.push(<CharView c={s} />);
  }

  return <CharsWrapper>{array}</CharsWrapper>;
}

const CharBox = styled.div`
  border: 1px solid gray;
  width: fit-content;
  margin: 1rem;
  padding: 1rem;
`;
const Char = styled.div`
  font-size: 120px;
  margin: 0;
  padding: 0;
  line-height: 100%;
`;

function CharView({ c }: { c: string }) {
  return (
    <CharBox>
      <Char>{c}</Char>
    </CharBox>
  );
}
