import { useContext } from "react";
import { AccordionContext } from "./AccordionContext";

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error("useAccordion must be used within a Accordion");
  }
  return context;
};
