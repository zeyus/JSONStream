declare module "JSONStream" {
  import { Transform } from "stream";

  export function parse(path?: string | string[]): Transform;
  export function stringify(): Transform;
}
