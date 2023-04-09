import styled from "styled-components";

export const AccordionContentContainer = styled.div<{ expanded: boolean }>`
  background-color: ${({ theme }) => theme.palette.divider};
  height: ${({ expanded }) => (expanded ? "auto" : 0)};
  padding: ${({ expanded }) => (expanded ? "16px" : "0 16px")};
  overflow: ${({ expanded }) => (expanded ? "visible" : "hidden")};
  transition: 0.3s all;
`;
