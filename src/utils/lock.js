import { fluidRange } from 'polished';

export default function lock(
  prop,
  fromSize,
  toSize,
  fromBreakpoint = 'mobilePortrait',
  toBreakpoint = 'desktop'
) {
  return function getStyle({ theme }) {
    return fluidRange(
      {
        prop,
        fromSize,
        toSize,
      },
      `${theme.breakpoints[fromBreakpoint]}px`,
      `${theme.breakpoints[toBreakpoint]}px`
    );
  };
}
