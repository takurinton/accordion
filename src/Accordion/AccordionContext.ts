import { ReactNode, createContext } from "react";
import { noop } from "../utils";

type AccordionContextType = {
  title: ReactNode;
  expanded: boolean;
  disabled?: boolean;
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
};

export const AccordionContext = createContext<AccordionContextType>({
  title: "",
  expanded: false,
  disabled: false,
  onChange: noop,
});
