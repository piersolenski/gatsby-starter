import invariant from './invariant';

const error = (breakpoint) =>
  `Breakpoint "${breakpoint}" does not exist in theme`;

export function max(dimension, breakpoint) {
  return function getStyle({ theme }) {
    const value = theme.breakpoints[breakpoint];
    invariant(value, error(breakpoint));
    return `max-${dimension}: ${value - 1}px`;
  };
}

export function min(dimension, breakpoint) {
  return function getStyle({ theme }) {
    const value = theme.breakpoints[breakpoint];
    invariant(value, error(breakpoint));
    return `min-${dimension}: ${value}px`;
  };
}
