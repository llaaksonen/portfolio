import type { CSSProperties, MouseEvent } from "react";

type Style = Partial<CSSProperties>;

/**
 * Returns onMouseEnter/onMouseLeave handlers that apply a style delta on hover
 * and revert it on leave. Keeps the data-driven, per-element hover colors that
 * pure CSS classes can't express, without repeating the verbose inline handler
 * boilerplate at every call site.
 */
export function hover(enter: Style, leave: Style) {
  return {
    onMouseEnter: (e: MouseEvent<HTMLElement>) =>
      Object.assign(e.currentTarget.style, enter),
    onMouseLeave: (e: MouseEvent<HTMLElement>) =>
      Object.assign(e.currentTarget.style, leave),
  };
}
