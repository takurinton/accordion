import { createContext } from "react";
import { noop } from "../utils";

type AccordionContextType = {
  expanded: boolean;
  expandedIcon?: string;
  disabled?: boolean;
  // これ onChange??
  setExpanded: (expanded: boolean) => void;
  onChange?: () => void;
};

export const AccordionContext = createContext<AccordionContextType>({
  expanded: false,
  expandedIcon: undefined,
  disabled: false,
  setExpanded: noop,
});
