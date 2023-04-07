import { ReactNode } from "react";
import { useAccordion } from "../Accordion";
import { AccordionContentContainer } from "./styled";

export const AccordionContent = ({ children }: { children?: ReactNode }) => {
  const { expanded } = useAccordion();

  return (
    <AccordionContentContainer expanded={expanded}>
      {children}
    </AccordionContentContainer>
  );
};
