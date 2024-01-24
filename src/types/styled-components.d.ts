import "styled-components";
import { LIGHT_THEME } from "@/misc/theme";

type Theme = typeof LIGHT_THEME;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
