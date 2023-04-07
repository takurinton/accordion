import { ReactNode } from "react";
import { Icon } from "ingred-ui";
import { useAccordion } from "../Accordion";
import {
  AccordionTitleChildrenContainer,
  AccordionTitleContainer,
  DropdownIndicator,
  IconButton,
} from "./styled";

export const AccordionTitle = ({ children }: { children?: ReactNode }) => {
  const { expanded, setExpanded } = useAccordion();

  const handleClickTitle = () => {
    setExpanded(!expanded);
  };

  return (
    <AccordionTitleContainer display="flex" onClick={handleClickTitle}>
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
};
