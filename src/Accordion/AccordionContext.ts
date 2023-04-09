import { createContext } from "react";
import { noop } from "../utils";

type AccordionContextType = {
  expanded: boolean;
  disabled?: boolean;
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
};

export const AccordionContext = createContext<AccordionContextType>({
  expanded: false,
  disabled: false,
  onChange: noop,
});
