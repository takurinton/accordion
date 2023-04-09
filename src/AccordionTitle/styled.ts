import { Flex } from "ingred-ui";
import styled from "styled-components";

export const AccordionTitleContainer = styled(Flex)<{ disabled?: boolean }>`
  background-color: ${({ disabled, theme }) =>
    // gray...
    disabled ? theme.palette.gray.light : theme.palette.divider};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  color: ${({ disabled, theme }) =>
    // gray...
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

// 右よせ
export const DropdownIndicator = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 auto;
  width: ${({ theme }) => theme.spacing * 5}px;
`;
