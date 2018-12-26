import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const translateUp = keyframes`
 0% {
    transform: translateY(-20px);
  }
  100% {
    transform:  translateY(0);
  }
`;
