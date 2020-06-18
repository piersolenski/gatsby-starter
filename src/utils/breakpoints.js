function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const error = (breakpoint) =>
  `Breakpoint "${breakpoint}" does not exist in theme`;

export function maxWidth(breakpoint) {
  return function getStyle({ theme }) {
    const width = theme.breakpoints[breakpoint];
    error(width, breakpoint);
    return `@media (max-width: ${width - 1}px)`;
  };
}

export function minWidth(breakpoint) {
  return function getStyle({ theme }) {
    const width = theme.breakpoints[breakpoint];
    error(width, breakpoint);
    return `@media (min-width: ${width}px)`;
  };
}

export function betweenWidth(startBreakpoint, endBreakpoint) {
  return function getStyle({ theme }) {
    const startWidth = theme.breakpoints[startBreakpoint];
    const endWidth = theme.breakpoints[endBreakpoint];
    error(startWidth, startBreakpoint);
    error(endWidth, endBreakpoint);
    return `@media (min-width: ${startWidth}px) and (max-width: ${
      endWidth - 1
    }px)`;
  };
}

export function minHeight(breakpoint) {
  return function getStyle({ theme }) {
    const height = theme.breakpoints[breakpoint];
    error(height, breakpoint);
    return `@media (min-height: ${height}px)`;
  };
}

export function maxHeight(breakpoint) {
  return function getStyle({ theme }) {
    const height = theme.breakpoints[breakpoint];
    invariant(height, breakpoint);
    return `@media (max-height: ${height - 1}px)`;
  };
}
