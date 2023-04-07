import styled, { keyframes } from "styled-components";

// expanded で分岐せずに opacity で分岐させてるから初期表示時に一瞬表示されてしまう
const open = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const close = keyframes`
  from {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
  }
`;

export const AccordionContentContainer = styled.div<{ expanded: boolean }>`
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  padding: ${({ theme }) => theme.spacing * 1.25}px;
  background-color: ${({ theme }) => theme.palette.divider};
  animation-duration: 0.1s;
  animation-timing-function: linear;
  animation-name: ${({ expanded }) => (expanded ? open : close)};
`;
