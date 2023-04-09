import styled from "styled-components";
import { Flex } from "ingred-ui";

export const AccordionTitleContainer = styled(Flex)<{ disabled?: boolean }>`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray.light : theme.palette.divider};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  color: ${({ disabled, theme }) =>
    disabled ? theme.palette.text.disabled : "auto"};
  justify-content: space-between;
`;

export const AccordionTitleChildrenContainer = styled.div`
  padding: ${({ theme }) => theme.spacing * 1.25}px;
`;

export const IconContainer = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const IconButton = styled.div<{ expanded: boolean }>`
  padding: ${({ theme }) => theme.spacing * 1.25}px;
  transition: transform 150ms;
  transform-origin: center center;
  transform: ${({ expanded }) => (expanded ? "rotate(180deg)" : "rotate(0)")};
`;

export const DropdownIndicator = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 auto;
  width: ${({ theme }) => theme.spacing * 5}px;
`;

export const AccordionContentContainer = styled.div<{ expanded: boolean }>`
  background-color: ${({ theme }) => theme.palette.divider};
  height: ${({ expanded }) => (expanded ? "auto" : 0)};
  padding: ${({ expanded }) => (expanded ? "16px" : "0 16px")};
  overflow: ${({ expanded }) => (expanded ? "visible" : "hidden")};
  transition: 0.3s all;
`;
