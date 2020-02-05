import { fluidRange as polishedFluidRange } from 'polished';

export default function fluidRange(
  config,
  from = 'mobilePortrait',
  to = 'desktop'
) {
  return function getStyle({ theme }) {
    return polishedFluidRange(
      config,
      `${theme.breakpoints[from]}px`,
      `${theme.breakpoints[to]}px`
    );
  };
}
