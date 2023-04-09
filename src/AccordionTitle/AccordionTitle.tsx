import { ReactNode, forwardRef } from "react";
import { Icon } from "ingred-ui";
import { useAccordion } from "../Accordion";
import {
  AccordionTitleChildrenContainer,
  AccordionTitleContainer,
  DropdownIndicator,
  IconButton,
} from "./styled";

type Props = {
  children: ReactNode;
};

export const AccordionTitle = forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }, ref) => {
    const { expanded, disabled, onChange } = useAccordion();

    const handleClickTitle = (event: React.SyntheticEvent) => {
      onChange && onChange(event, !expanded);
    };

    return (
      <AccordionTitleContainer
        ref={ref}
        display="flex"
        onClick={handleClickTitle}
        disabled={disabled}
        {...rest}
      >
        <AccordionTitleChildrenContainer>
          {children}
        </AccordionTitleChildrenContainer>
        <DropdownIndicator>
          <IconButton expanded={expanded}>
            <Icon name="arrow_bottom" size="md" color="black" />
          </IconButton>
        </DropdownIndicator>
      </AccordionTitleContainer>
    );
  }
);
