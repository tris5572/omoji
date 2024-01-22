import { useValueStore } from "@/misc/store";

export function TextView() {
  const text = useValueStore((state) => state.value);
  return <div>{text}</div>;
}
