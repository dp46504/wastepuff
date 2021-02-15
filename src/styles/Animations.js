import { keyframes } from "styled-components";

export const appearFromTop = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const pulse = keyframes`
from {
    transform: scale(1);
    opacity: 0.5;
  }
  to {
    transform: scale(1.05);
    opacity: 1;
  }
`;
