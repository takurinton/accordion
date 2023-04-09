import { ReactNode, forwardRef } from "react";
import { useAccordion } from "../Accordion";
import { AccordionContentContainer } from "./styled";

type Props = {
  children?: ReactNode;
};

export const AccordionContent = forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }, ref) => {
    const { expanded } = useAccordion();

    return (
      <AccordionContentContainer ref={ref} expanded={expanded} {...rest}>
        {children}
      </AccordionContentContainer>
    );
  }
);
