// export { cn } from "cn"

import { clsx } from "clsx";

export function cn(...inputs:any) {
  return clsx(inputs);
}